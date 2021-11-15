import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Select } from 'antd';


export default function LiveAuctions ({title,WETH,bid,heartcount, Coverimg,User1,User2,User3}) {
    const menu = (
        <Menu>
            <Menu.Item>
                Change Price
            </Menu.Item>
            <Menu.Item>
                Transfer Token
            </Menu.Item>
            <Menu.Item>
                Burn Token
            </Menu.Item>
            <Menu.Item>
                Report
            </Menu.Item>
        </Menu>
    );
  return (
    <div className="col-sm-12 col-lg-3">
        <div className="liveAuction-card-container">
            <div className="live-image">
                <img src={Coverimg} width="100%" alt="" />
                <div className="card-heart-icon"><i className="fas fa-heart"></i>{heartcount}</div>
                <Dropdown overlay={menu}>
                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </Dropdown>
            </div>

            <div className="bg-white p-4">
                <div className="live-user-list">
                    <img src={User1} width="36px" alt="" />
                    <img src={User2} width="36px" alt="" />
                    <img src={User3} width="36px" alt="" />
                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                </div>

                <h6>{title}</h6>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-danger"><b>{WETH}</b></div>
                    <small className="text-secondary">{bid}</small>
                </div>
            </div>
        </div>
    </div>
  );
}


