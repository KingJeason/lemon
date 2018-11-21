import * as React from 'react';


const observe = (WrappedComponent, observableFactory, defaultState) => {
    console.log(WrappedComponent, observableFactory, defaultState)
    return class Wrap extends React.Component {
        public props$;
        public subscription;
        constructor(props) {
            super(props);
            this.state = defaultState;
            this.props$ = observableFactory(this.props, this.state); // 生成一个observable
            console.log(this.props$, 'props')
            console.log(this.props, this.state, props)
        }

        public render() {
            return <WrappedComponent { ...this.props } { ...this.state } />
        }

        public componentWillUnmount() {
            console.log()
            this.subscription.unsubscribe();
        }

        public componentDidMount() {
            this.subscription = this.props$.subscribe(value => { console.log(value); this.setState(value) });
        }
    };
};

export default observe;