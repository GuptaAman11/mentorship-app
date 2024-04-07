import React from 'react'

const CommentForm = () => {
  return (
    <div><>
    <div className="p-5 m-5 border-2 rounded-lg shadow-md bg-white">
<h1 className="text-2xl font-bold text-blue-500 mb-4">ADD A COMMENT</h1>
<form className="mb-4">
<textarea
  className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
  placeholder="Write your comment"
  rows="4"
  name="commentData"
></textarea>
<button type="submit" className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
  Submit
</button>
</form>

</div>
{/* <div className="w-full space-y-4">
<>
{
comment.length===0 ? <div>"comment not found" </div> :

comment.map((comment) => (
  <Commentcard comment={comment} />
))
}
</>
</div> */}
</></div>
  )
}

export default CommentForm