import React from "react";

export default function Review() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0', background: '#f4f4f4' }}>
      <div style={{ background: 'white', borderRadius: '12px', padding: '45px 55px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '1060px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '14px', color: '#333', marginBottom: '25px' }}>
          Tasks Board <span style={{ color: '#999' }}>»</span> To Review <span style={{ color: '#999' }}>»</span> <strong style={{ color: '#5c0000' }}>Juliana C</strong>
        </div>

        <div style={{ display: 'flex' }}>
          {/* Left Side */}
          <div style={{ width: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #ccc', paddingBottom: '10px', marginBottom: '25px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Chapter 3</div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3179D9', marginRight: '6px' }}></div>
                <span style={{ fontWeight: 'bold', color: '#48010F' }}>To Review</span>
              </div>
            </div>

            <div style={{ fontSize: '14px', lineHeight: '1.9' }}>
              <div><strong>Subtasks:</strong> Implementation</div>
              <div><strong>Element:</strong> Peopleware</div>
              <div><strong>Date Created:</strong> Feb 4, 2025</div>
              <div><strong>Revision No:</strong> <span style={{ color: '#990000' }}>No Revision</span></div>
              <div><strong>Due Date:</strong> <span style={{ color: '#cc0000' }}>Feb 7, 2025</span></div>
              <div><strong>Time:</strong> 8:00 AM</div>
              <div><strong>Methodology:</strong> Agile</div>
              <div><strong>Project Phase:</strong> Analysis</div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '2px', backgroundColor: '#48010F', margin: '0 30px' }}></div>

          {/* Right Side */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', fontSize: '15px', borderBottom: '2px solid #ccc', marginBottom: '18px' }}>
              <div style={{ marginRight: '30px', paddingBottom: '6px', borderBottom: '3px solid #48010F', fontWeight: 'bold' }}>Comments</div>
              <div style={{ color: '#666' }}>Attachment</div>
            </div>

            {/* Input Comment */}
            <div style={{ marginBottom: '24px', border: '1px solid #ccc', borderRadius: '6px', padding: '12px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '6px' }}>Harzwel Zhen B Lacson</div>
              <textarea
                placeholder="Leave a comment"
                style={{ width: '100%', height: '80px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', resize: 'none', fontSize: '14px' }}
              ></textarea>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <div>
                  <button style={{ padding: '6px 12px', fontSize: '14px', marginRight: '8px' }}>📎</button>
                  <button style={{ padding: '6px 12px', fontSize: '14px' }}>🖊</button>
                </div>
                <button style={{ padding: '7px 18px', backgroundColor: '#48010F', color: 'white', border: 'none', borderRadius: '5px', fontSize: '15px' }}>Send</button>
              </div>
            </div>

            {/* Comment 1 */}
            <div style={{ marginBottom: '24px', fontSize: '15px' }}>
              <div style={{ fontWeight: 'bold' }}>Juliana N Castaneda <span style={{ fontWeight: 'normal', color: '#666' }}>• February 6, 2025 at 3:00 PM</span></div>
              <div style={{ marginTop: '6px' }}>Good afternoon, Add. I have already completed my part. Attached is the file my part. Thank you!</div>
              <div style={{ marginTop: '6px', backgroundColor: '#eee', display: 'inline-block', padding: '7px 12px', borderRadius: '7px', fontSize: '14px', color: '#333' }}>
                📎 Castaneda Chapter 3.pdf
              </div>
            </div>

            {/* Comment 2 */}
            <div style={{ fontSize: '15px' }}>
              <div style={{ fontWeight: 'bold' }}>Adriallene G Mendoza <span style={{ fontWeight: 'normal', color: '#666' }}>• February 7, 2025 at 6:00 PM</span></div>
              <div style={{ marginTop: '6px' }}>Good evening, Jull. I have already reviewed your work, and it’s correct. I will be adding it to our manuscript.</div>
              <div style={{ color: '#660000', fontWeight: 'bold', marginTop: '6px', cursor: 'pointer' }}>Reply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
