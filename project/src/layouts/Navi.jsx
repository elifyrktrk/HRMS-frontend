import React from 'react'
import { Button, Container, Dropdown, Input, Menu } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>
        <Menu inverted fixed="top">
          <Container>
          <Menu.Item
          name='home'
          /*active={activeItem === 'home'}
          onClick={this.handleItemClick}*/
        />
        <Menu.Item
          name='messages'
          /*active={activeItem === 'messages'}
          onClick={this.handleItemClick}*/
        />

        <Menu.Menu position='right'>
        <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
          </Container>
        </Menu>
        </div>
    )
}
