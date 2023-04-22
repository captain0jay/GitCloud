import React, { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Upload
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <form method="POST" action='/uploadfile' enctype="multipart/form-data">
    <input type='file' name="file"/>
  <div class="form-group">
    <label for="exampleFormControlSelect1">FILE TYPE</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Images</option>
      <option>Videos</option>
      <option>Audios</option>
      <option>Others</option>
    </select>
  </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
        <input type="submit" className="btn btn-primary" value="upload"/>
      </div>
</form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}