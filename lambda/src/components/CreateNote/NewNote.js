import React from 'react';
import { H2, TitleInput, ContentInput, Button } from '../StyledComponents';

class Note extends React.Component {
  state = {
    title: '',
    textBody: ''
  };

  onInputChnage = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSumbit = event => {
    this.props.addNewNote(this.state);
  };

  render() {
    return (
      <div className="newNote">
        <TitleInput
          onChange={this.onInputChnage}
          type="text"
          name="title"
          placeholder="Note Title"
        />
        <ContentInput
          onChange={this.onInputChnage}
          type="text"
          name="textBody"
          rows="40"
          col="5"
          placeholder="Note Content"
          wrap="soft"
        />
        <Button onClick={this.onSumbit} submit>
          Submit
        </Button>
      </div>
    );
  }
}

function NewNote(props) {
  return (
    <div className="appView">
      <H2>Create New Note:</H2>
      <Note {...props} />
    </div>
  );
}

export default NewNote;
