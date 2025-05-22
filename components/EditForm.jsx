import { editTask } from "@/utils/actions";

const EditForm = ({task}) => {
  const {id, completed, content} = task
    console.log(task);
    
  return (
    <form action = {editTask} className="max-w-sm  p-12 border border-base-300 rounded-lg">
      <input type="hidden" name="id" value={id}/>
    </form>
  )
}

export default EditForm 