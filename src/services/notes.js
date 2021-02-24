import { ActionCreators } from '../redux/notesReducer'

export const GetNotes = async (dispatch) => {
   try{
      // api call
      const response = [
         {value: 'Study for exam in 3 week', id: 1},
         {value: 'At this rate I will be a master in no time', id: 2},
         {value: 'Build more full-stack applications', id: 3},
         {value: 'I love writing notes', id: 4}
      ];

      dispatch(ActionCreators.setNotes(response));
   } catch {
      console.log('Error!');
   }
}

export const DeleteNote = async (dispatch, note) => {
   try{
      // api call
      dispatch(ActionCreators.deleteNote(note));
   } catch {
      console.log('Error!');
   }
}

export const NewNote = async (dispatch, note) => {
   try{
      // api call
      const response = {value: note, id: 1};
      dispatch(ActionCreators.newNote(response));
   } catch {
      console.log('Error!');
   }
}

export const EditNote = async (dispatch, note) => {
   try{
      // api call
      const response = {value: note, id: 1};
      dispatch(ActionCreators.editNote(response));
   } catch {
      console.log('Error!');
   }
}