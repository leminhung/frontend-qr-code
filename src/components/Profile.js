import React from "react";

const Profile = (props) => {
  const { image, name, fullName, sub_title, university, hometown } = props.user;

  return (
    <div className='row py-5 px-4'>
      <div className='col-md-5 mx-auto'>
        <div className='bg-white shadow rounded overflow-hidden'>
          <div className='px-4 pt-0 pb-4 cover'>
            <div className='media align-items-end profile-head'>
              <div className='profile mr-3'>
                <img
                  src={image}
                  alt='profile'
                  width='160'
                  className='rounded mb-2 img-thumbnail'
                />
              </div>
              <div className='media-body mb-5 text-white'>
                <h4 className='mt-0 mb-0 my-name'>{name}</h4>
                <p className='small mb-4'>
                  {" "}
                  <i className='fas fa-map-marker-alt mr-2'></i>
                  {sub_title}
                </p>
              </div>
            </div>
          </div>
          <div className='px-4 py-3'>
            <h5 className='mb-0 mt-8'>
              <span>About </span>
            </h5>
            <div className='p-4 rounded shadow-sm bg-light'>
              <p className='font-italic mb-0'>
                <span>Name: </span> {fullName}
              </p>
              <p className='font-italic mb-0'>
                <span>University: </span>
                {university}
              </p>
              <p className='font-italic mb-0'>
                <span>Hometown: </span> {hometown}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
