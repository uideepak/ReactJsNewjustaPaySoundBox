import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import tablepodWitchDisplay from "../../Assets/New folder/display-soundbox.png";
import tb from "../../Assets/New folder/soundbox.png";
import idCard from "../../Assets/New folder/idcardsoundbox.png";
import technicalspecification from "../../Assets/New folder/Detachable_QR.png";
import circleicon from "../../Assets/circle-icon1.png";
import circleicontwo from "../../Assets/circle-icon2.png";
import circleiconthree from "../../Assets/circle-icon3.png";
import circleiconfour from "../../Assets/circle-icon4.png";
export default function Products() {
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row ">

          
            <div className="col-md-12">
              <div className="product">
              <p className="display-3 text-white fw-bold text-center">Products</p>
            <p className=" text-white fw-medium text-center">
              Easy and Safe Payment Devices
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*   */}

      <section className="p-5">
        <div className="container">
          <div
            className="row align-items-center border  rounded-4 "
            style={{ border: "10px solid red" }}
          >
            <div className="col-md-6">
              <div className="text-center py-5">
                <img src={tb} alt="" className="w-50" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <div>
                  <img src={circleicon} alt="" className="w-100" />
                </div>
                <p className="fs-1 fw-medium">Table Pod</p>
              </div>
              <div className="text-muted ctm-feature-text">
                Feature & Description
              </div>
            </div>
            <div className="row py-5 mx-auto ">
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Memory </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  16MB RAM. 8MB ROM (Upgradeable)
                </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Rechargeable Battery </div>
                </div>
                <div className="mb-3 ctm-text-product">2000 - 2600mAh </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Charging Port </div>
                </div>
                <div className="mb-3 ctm-text-product">1 Type C Connector</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Connectivity </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  4G, 2G, 4G + 2G (+ Wi-Fi for all){" "}
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Processor </div>
                </div>
                <div className="mb-3 ctm-text-product">32 bit ARM</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Language </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  All languages are supported
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sound id card  */}
      <section className="p-5">
        <div className="container">
          <div
            className="row align-items-center border  rounded-4 "
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <div className="col-md-5">
              <div className="d-flex align-items-center gap-3">
                <div>
                  <img src={circleicontwo} alt="" className="w-100" />
                </div>
                <p className="fs-1 fw-medium text-center">Soundbox ID Card</p>
              </div>
              <div>
                <div className="text-muted ctm-feature-text">
                  Feature & Description
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="text-center py-5">
                <img src={idCard} alt="" className="w-50" />
              </div>
            </div>

            <div className="row py-5 mx-auto">
              <div className="col-md-4 ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Display </div>
                </div>
                <div className=" mb-3 ctm-text-product">
                  {" "}
                  1.5 inch, 8-digit LCD display
                </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Memory </div>
                </div>
                <div className="  mb-3 ctm-text-product mb-3">
                  16MB RAM, 8MB ROM (Upgradeable){" "}
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Rechargeable Battery </div>
                </div>
                <div className="mb-3 ctm-text-product"> 2000 - 2600mAh</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Charging Port </div>
                </div>
                <div className="mb-3 ctm-text-product">1 Type C Connector</div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Connectivity </div>
                </div>
                <div className="mb-3 ctm-text-product">2G </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Processor </div>
                </div>
                <div className="mb-3 ctm-text-product"> 32 bit ARM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* table pod with display */}
      <section className="p-5">
        <div className="container">
          <div
            className="row align-items-center border  rounded-4 "
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <div className="col-md-6">
              <div className="text-center py-5">
                <img src={tablepodWitchDisplay} alt="" className="w-50" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <div>
                  <img src={circleiconthree} alt="" className="w-100" />
                </div>
                <p className="fs-1 fw-medium text-center">
                  Table Pod With Display
                </p>
              </div>
              <div>
                <div className="text-muted ctm-feature-text">
                  Feature & Description
                </div>
              </div>
            </div>
            <div className="row py-5 mx-auto">
              <div className="col-md-4 ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Display </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  1.5 inch, B - digit LCD display
                </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Memory </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  16MB RAM, 8MB ROM (Upgradeable){" "}
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Rechargeable Battery </div>
                </div>
                <div className="mb-3 ctm-text-product"> 2000 - 2600mAh</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Charging Port </div>
                </div>
                <div className="mb-3 ctm-text-product">1 Type C Connector</div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Connectivity </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  4G, 2G, 4G + 2G (+ Wi-Fi for all)
                </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Processor </div>
                </div>
                <div className="mb-3 ctm-text-product">32 bit ARM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification */}

      <section className="p-5">
        <div className="container">
          <div
            className="row align-items-center border  rounded-4 "
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <div className="col-md-7">
              <div className="d-flex  gap-3">
                <div>
                  <img src={circleiconfour} alt="" className="w-100" />
                </div>
                <p className="fs-1 fw-medium text-center">
                  Table Pod With Detachable QR Plate
                </p>
              </div>

              <div>
                {/* <p className="text-muted text-center">feature & description</p> */}
              </div>
            </div>

            <div className="col-md-5">
              <div className="text-center py-5">
                <img src={technicalspecification} alt="" className="w-75" />
              </div>
            </div>
            <div className="row py-5 mx-auto">
              <div className="col-md-4 ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Display </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  {" "}
                  1.5 inch, 8-digit LCD display
                </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Memory </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  16MB RAM, 8MB ROM (Upgradeable){" "}
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Rechargeable Battery </div>
                </div>
                <div className="mb-3 ctm-text-product">2000 - 2600mAh</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Charging Port </div>
                </div>
                <div className="mb-3 ctm-text-product">1 Type C Connector </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium ">Connectivity </div>
                </div>
                <div className="mb-3 ctm-text-product">
                  4G, 2G, 4G + 2G (+ Wi-Fi for all)
                </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow size={25} style={{ color: "#F16532" }} />{" "}
                  <div className="fs-5 fw-medium">Processor </div>
                </div>
                <div className="mb-3 ctm-text-product"> 32 bit ARM </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
