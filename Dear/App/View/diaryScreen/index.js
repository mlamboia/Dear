import React, {Component}  from 'react';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { addEmotion } from '../../Controller/emotionController';

export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form title='New Emotion'>
            <Item floatingLabel>
              <Label>Emotion</Label>
              <Input 
              onChangeText = { (text) => this.setState({ text })}
              />
            </Item>
            <Button 
          onPress={ () =>
            addEmotion(this.setState.text)}
          title='Add Emotion'/>
          </Form>
        </Content>
      </Container>
    );
  }
}