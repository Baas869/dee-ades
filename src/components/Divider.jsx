import React from 'react'

function Divider() {
    return (
        <div className="bg-transparent">
          <span
            style={{
              display: 'block',
              transform: 'rotate(90deg)',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: 'rgba(40,58,90,0.9)',
              textAlign: 'center',
            }}
          >
            {'}'}
          </span>
        </div>
      );
}

export default Divider