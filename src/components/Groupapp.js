import React, { Component } from 'react'
export class Groupapp extends Component {
    
    render(){
        return(
<>
<div className='container'>
<form method="post" action="/uploadfile" enctype="multipart/form-data">
<div class="form-group">
    <input type="file" className="form-control-file" name="file" id="files" multiple/>
  <button type="submit" class="btn btn-default">Upload</button>
  </div>
</form>
</div>
</>
        )
    }
}

export default Groupapp