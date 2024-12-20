import React from "react";
import "./style.css";
import IconHeader from "./icon";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
    isDark?: boolean;
}

const Header: React.FC<HeaderProps> = ({isDark = false}) => {
    const color = isDark ? "rgba(46, 73, 54, 1)" : "white";
    const navigate = useNavigate();
  
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={`header-container`}>
            <button className="back-button" onClick={handleBack}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.5L1 8.5M1 8.5L6.625 16M1 8.5L6.625 0.999999" stroke={color} 
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            
            <div style={{
                borderRadius: '50%',
                padding: '5px 6px 1px',
                backgroundColor: 'white',
                marginLeft: '44px'
            }}>
                
                <IconHeader/>
            </div>
            <button onClick={() => {}}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.82092 7.4992L14.7229 1.60597C14.8993 1.42954 14.9984 1.19026 14.9984 0.940755C14.9984 0.691251 14.8993 0.451966 14.7229 0.275541C14.5465 0.099115 14.3072 0 14.0577 0C13.8083 0 13.569 0.099115 13.3926 0.275541L7.5 6.17814L1.6074 0.275541C1.43099 0.099115 1.19173 2.2152e-07 0.942253 2.23379e-07C0.692776 2.25238e-07 0.453517 0.099115 0.27711 0.275541C0.100703 0.451966 0.001599 0.691251 0.001599 0.940755C0.001599 1.19026 0.100703 1.42954 0.27711 1.60597L6.17908 7.4992L0.27711 13.3924C0.189303 13.4795 0.119609 13.5832 0.0720482 13.6973C0.0244871 13.8115 0 13.934 0 14.0576C0 14.1813 0.0244871 14.3038 0.0720482 14.418C0.119609 14.5321 0.189303 14.6358 0.27711 14.7229C0.3642 14.8107 0.467813 14.8804 0.581973 14.9279C0.696134 14.9755 0.818582 15 0.942253 15C1.06592 15 1.18837 14.9755 1.30253 14.9279C1.41669 14.8804 1.52031 14.8107 1.6074 14.7229L7.5 8.82026L13.3926 14.7229C13.4797 14.8107 13.5833 14.8804 13.6975 14.9279C13.8116 14.9755 13.9341 15 14.0577 15C14.1814 15 14.3039 14.9755 14.418 14.9279C14.5322 14.8804 14.6358 14.8107 14.7229 14.7229C14.8107 14.6358 14.8804 14.5321 14.928 14.418C14.9755 14.3038 15 14.1813 15 14.0576C15 13.934 14.9755 13.8115 14.928 13.6973C14.8804 13.5832 14.8107 13.4795 14.7229 13.3924L8.82092 7.4992Z" 
                fill={color} 
                />
                </svg>
            </button>
        </div>
    );
};

export default Header;