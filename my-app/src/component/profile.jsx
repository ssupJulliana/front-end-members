import React from "react";

const Profile = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ width: "950px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#631414", marginRight: "5px" }}>
            <i className="fas fa-user-circle" style={{ marginRight: "5px" }}></i>
            Profile
          </span>
        </div>
        <hr style={{ borderTop: "2px solid #631414", marginBottom: "20px" }} />

        {/* Profile Picture + Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "10px" }}>
              Profile Picture
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Profile Icon"
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />
          </div>
          <button
            style={{
              backgroundColor: "#fff",
              border: "1px solid #631414",
              padding: "6px 10px",
              fontSize: "12px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-pen" style={{ marginRight: "6px" }}></i> Update Profile
          </button>
        </div>

        {/* Form Sections */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #c9c9c9",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "50%", fontWeight: "bold", fontSize: "13px", color: "#631414" }}>
            Personal Details
          </div>
          <div style={{ width: "50%", fontWeight: "bold", fontSize: "13px", color: "#631414" }}>
            Security Account
          </div>
        </div>

        <div style={{ display: "flex", gap: "40px" }}>
          {/* Left side */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "12px", marginBottom: "4px" }}>Last Name</div>
              <input type="text" value="Lacson" className="input" />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "12px", marginBottom: "4px" }}>First Name</div>
              <input type="text" value="Harzwel Zhen" className="input" />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "12px", marginBottom: "4px" }}>Middle Name</div>
              <input type="text" value="Bonus" className="input" />
            </div>
            <div>
              <div style={{ fontSize: "12px", marginBottom: "4px" }}>Role</div>
              <input type="text" value="Member" className="input" />
            </div>
          </div>

          {/* Right side */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "12px", marginBottom: "4px" }}>ID NO</div>
              <input type="text" value="561049738" className="input" />
            </div>

            {/* Password with forgot password below */}
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "12px", marginBottom: "4px" }}>Password</div>
              <input type="password" value="password" className="input" />
              <div
                style={{
                  fontSize: "10px",
                  color: "#631414",
                  textAlign: "right",
                  marginTop: "4px",
                }}
              >
                Forgot Password
              </div>
            </div>

            <div>
              <div style={{ fontSize: "12px", marginBottom: "4px" }}>Email</div>
              <input type="text" className="input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
