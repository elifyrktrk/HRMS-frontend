import React from 'react'
import Categories from './Categories'
import JobList from '../pages/JobList'
import { Grid, GridColumn ,GridRow} from 'semantic-ui-react'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width="4">
                        <Categories/>
                    </GridColumn>
                    <GridColumn width="12">
                        <JobList/>
                    </GridColumn>
                </GridRow>
            </Grid>
            
            
        </div>
    )
}
