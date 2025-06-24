import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#fff', 
      padding: '16px 40px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid #e5e7eb',
      height: '70px'
    }}>
      {/* Logo Section */}
      <div style={{ 
        width: '100px', 
        height: '24px' 
      }}>
        <Image
          src="/images/verifieze-logo.png"
          alt="Verifieze Logo"
          width={100}
          height={24}
          priority
        />
      </div>

      {/* Navigation Links */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '32px' 
      }}>
        <a href="#" style={{ 
          color: '#374151', 
          textDecoration: 'none', 
          fontSize: '16px',
          fontWeight: '500'
        }}>Products</a>
        <a href="#" style={{ 
          color: '#374151', 
          textDecoration: 'none', 
          fontSize: '16px',
          fontWeight: '500'
        }}>Due Diligence</a>
        <a href="#" style={{ 
          color: '#374151', 
          textDecoration: 'none', 
          fontSize: '16px',
          fontWeight: '500'
        }}>Data Security</a>
        <a href="#" style={{ 
          color: '#374151', 
          textDecoration: 'none', 
          fontSize: '16px',
          fontWeight: '500'
        }}>About JFS</a>
        <a href="#" style={{ 
          color: '#374151', 
          textDecoration: 'none', 
          fontSize: '16px',
          fontWeight: '500'
        }}>Contact</a>
      </div>

      {/* Right Side Actions */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '24px' 
      }}>
        <a href="#" style={{ 
          color: '#6b7280', 
          textDecoration: 'none', 
          fontSize: '14px' 
        }}>Contact support</a>
        <a href="#" style={{ 
          color: '#6b7280', 
          textDecoration: 'none', 
          fontSize: '14px' 
        }}>My background check</a>
        <a href="#" style={{ 
          color: '#6b7280', 
          textDecoration: 'none', 
          fontSize: '14px' 
        }}>Log in</a>
        
        <button style={{ 
          backgroundColor: '#009BB5', 
          color: 'white', 
          border: 'none', 
          padding: '10px 16px', 
          borderRadius: '6px', 
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>Sign up</button>
        
        <button style={{ 
          color: '#009BB5', 
          border: '1px solid #009BB5', 
          backgroundColor: 'white', 
          padding: '10px 16px', 
          borderRadius: '6px', 
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>Talk to sales</button>
      </div>
    </nav>
  );
}