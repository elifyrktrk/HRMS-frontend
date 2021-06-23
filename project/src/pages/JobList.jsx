import React, { useState, useEffect } from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'
import JobService from '../services/jobService'

export default function JobList() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        let jobService = new JobService()
        jobService.getJobs().then(result=>setJobs(result.data.data))
    }, [])

    return (
        <div>
            <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
        <Table.HeaderCell>Effect</Table.HeaderCell>
        <Table.HeaderCell>Efficacy</Table.HeaderCell>
        <Table.HeaderCell>Consensus</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {jobs.map((job)=> (
          <Table.Row key={job.id}>
          <Table.Cell>
            <Header as='h2' textAlign='center'>
              A
            </Header>
          </Table.Cell>
          <Table.Cell singleLine>{job.jobName}</Table.Cell>
          <Table.Cell>
            <Rating icon='star' defaultRating={3} maxRating={3} />
          </Table.Cell>
          <Table.Cell textAlign='right'>
            80% <br />
            <a href='#'>18 studies</a>
          </Table.Cell>
          <Table.Cell>
            Creatine supplementation is the reference compound for increasing
            muscular creatine levels; there is variability in this increase,
            however, with some nonresponders.
          </Table.Cell>
        </Table.Row>
      ))}
      
    </Table.Body>
  </Table>
        </div>
    )
}
