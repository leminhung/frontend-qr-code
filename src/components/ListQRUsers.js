import React from "react";
import QRCode from "qrcode.react";

import { users } from "../_mock_/users";

const ListQRUsers = () => {
  return (
    <div className='list-qr'>
      {users.map((user) => {
        return (
          <div className='details'>
            <QRCode
              id='qrcode'
              value={user.link}
              size={160}
              level={"H"}
              includeMargin={true}
              imageSettings={{
                src: user.image,
                width: "48",
                height: "48",
              }}
              excavate='true'
            />
            <p className='name'>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListQRUsers;
