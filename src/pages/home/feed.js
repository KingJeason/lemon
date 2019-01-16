import React from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import PostItem from './postItem'
const styles = (theme) => createStyles({
    root: {
        display: 'flex',
        minHeight: '100vh'
    },
    ad: {
        flex: 1,
        height: '100%'
    }
});

@withStyles(styles)
class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
        const { classes } = this.props
        const { } = this.state
        return (
            <div className={ classes.root }>
                <List style={ { width: '70%', height: '100%' } }>
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                    <PostItem mode={ 3 } />
                </List>
                <div className={ classes.ad }>

                </div>
            </div>
        )
    }
}

export default Feed