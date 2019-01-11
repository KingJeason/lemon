import React from 'react';
import Featured from './featured'
import Divider from '@material-ui/core/Divider';

import { createStyles, withStyles } from '@material-ui/core/styles';
const styles = (theme) => createStyles({
});



class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render () {
        const { classes } = this.props
        return (
            <div>
                <Featured />
                <Divider />
            </div>


        )
    }
}
export default withStyles(styles)(Home);
