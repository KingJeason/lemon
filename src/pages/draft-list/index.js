import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { indexDraftsService } from '../../services/drafts'
import Header from '../../layouts/Header'
import List from '@material-ui/core/List';
import DraftListItem from './list-item'

const styles = (theme) => createStyles({
    layout: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        width: 'auto',
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 1100,
        },
        // color: 'red'
    },
    shadow: {
        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)'
    }

});

@connect(state => state)
class DraftList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    deleteDraft = () => {
        console.log(123)
    }

    async componentDidMount () {
        const res = await indexDraftsService()
        this.setState({
            data: res.data
        })
    }

    routerToDraft = (draft) => {
        this.props.history.push('/drafts/' + draft._id)
    }

    deleteDraft = (draft) => {
        console.log('delete', draft)
    }

    render () {
        const { classes } = this.props
        const { data } = this.state
        console.log(classes.layout)

        return (
            <div>
                <section className={ classes.shadow }>
                    <div className={ classes.layout }>
                        <Header isNav={ false } />
                    </div>
                </section>
                <section className={ `${classes.layout}` }>
                    <Toolbar style={ { marginTop: 50 } }>
                        <Typography variant="h4" gutterBottom>
                            草稿({ data.length })
                        </Typography>
                    </Toolbar>
                    <List >
                        { data.map((draft) => {
                            return (
                                <DraftListItem key={ draft._id } draft={ draft } clickItem={ this.routerToDraft } deleteItem={ this.deleteDraft } />
                            )
                        }) }

                    </List>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(DraftList);
