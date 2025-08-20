import React from "react";

export default function TaskRecord() {
  const cards = [
    { title: "Title Defense" },
    { title: "Oral Defense" },
    { title: "Final Defense" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          width: "1060px",
          background: "#fff",
          borderRadius: "10px",
          padding: "40px 45px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "25px",
            color: "#1a1a1a",
          }}
        >
          <span style={{ marginRight: "8px" }}>🗃</span>
          <span
            style={{
              color: "#48010F",
            }}
          >
            Tasks Record
          </span>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: "25px" }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                width: "150px",
                height: "200px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                overflow: "hidden",
                border: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "28px",
                  backgroundColor: "#48010F",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "28px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/calendar.png"
                  alt="icon"
                  style={{ width: "48px", height: "48px", marginBottom: "10px" }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#48010F",
                  }}
                >
                  {card.title}
                </span>
              </div>
              <div
                style={{
                  height: "20px",
                  backgroundColor: "#48010F",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
