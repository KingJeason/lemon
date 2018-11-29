import * as React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Header from './Header'

const styles = (theme: Theme): object => createStyles({
    layout: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        width: 'auto',
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 1100,
        },
    },
})

export interface IAppProps {
    classes: any
}

export interface IAppState {

}

class BasicLayout extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={ classes.layout }>
                    <Header />
                </div>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(BasicLayout)

