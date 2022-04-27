/*{
    users.map((users)=>(
      <>
      {
        users.userid===user.uid &&
        <form className="expform" onSubmit={editprofile}>
          <label className="expsubtitle" for="name">
            {" "}
            Name{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="name"
            id="name"
            placeholder=""
             onChange={(e) => {
                setName(e.target.value);
              }}
          />
          <label className="expsubtitle" for="title">
            {" "}
            Title{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="title"
            id="title"
            placeholder=""
             onChange={(e) => {
                setTitle(e.target.value);
              }}
          />
          <label className="expsubtitle" for="tel">
            {" "}
            Phone Number{" "}
          </label>
          <input
            className="expinputs"
            required
            type='tel'
            name="tel"
            id="tel"
            placeholder=""
             onChange={(e) => {
                setTel(e.target.value);
              }}
          />
          <label className="expsubtitle" for="explocation">
            {" "}
            Location{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="explocation"
            id="explocation"
            placeholder=""
            onChange={(e) => {
                setLocation(e.target.value);
              }}
          />
          <label className="expsubtitle" for="expaddress">
            {" "}
            Address{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="expaddress"
            id="expaddress"
            placeholder=""
             onChange={(e) => {
                setAddress(e.target.value);
              }}
          />
          

          <button className="expbutton" type="submit">Add</button>
        </form>
        
        
      }
      </>
    ))
  }

  <Link to='/createjob'>
  <button className="createjobbtn"><NoteAdd className="addjobicon"/> Post a Job</button>
</Link>*/
/*<div className="postjobcard">
                <h3 className="postjobtag">Post a Job for People to See</h3>
                <Link to="/createjob">
                  <button className="createjobcardbtn">
                    <NoteAdd className="addjobicon" /> Post a Job
                  </button>
                </Link>
              </div>*/