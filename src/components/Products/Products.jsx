import React from "react";
import tableSoundbox from "../../Assets/tableSoundbox.png";
import { MdDoubleArrow } from "react-icons/md";
import tablepodWitchDisplay from "../../Assets/table.png"
import tb from "../../Assets/tb.png"
import idCard from "../../Assets/sound-2.png";
import technicalspecification from "../../Assets/sonund-3.png"

export default function Products() {
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row product">
            <p className="display-3 text-white fw-bold text-center">Products</p>
            <p className=" text-white fw-medium text-center">
              There is now an abundance of readable dummy texts.
            </p>
          </div>
        </div>
      </section>
      {/*   */}

      <section className="p-5">
        <div className="container">
          <div
            className="row align-items-center border  rounded-4 "
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <div className="col-md-6">
              <div className="text-center py-5">
                <img src={tb} alt="" className="w-50" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className="fs-1 fw-medium text-center">Table Pad</p>
                <p className="text-muted text-center">feature & description</p>
              </div>
            </div>
            <div className="row py-5 mx-auto">
              <div className="col-md-4 ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Memory </div>
                </div>
                <div className="px-4">16MB RAM. 8MB ROM (Upgradeable)</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Rechargeable Battery </div>
                </div>
                <div className="px-4">2000 - 2600mAh (Optional fast charging) </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Charging Port </div>
                </div>
                <div className="px-4">1 Type C Connector</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Connectivity </div>
                </div>
                <div className="px-4">4G, 2G, 4G + 2G (+ Wi-Fi for all) </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Processor </div>
                </div>
                <div className="px-4">32 bit ARM</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Language </div>
                </div>
                <div className="px-4">All languages are supported</div>
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
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px," }}
          >
            <div className="col-md-6">
              <div>
                <p className="fs-1 fw-medium text-center">Soundbox ID card</p>
                <p className="text-muted text-center">feature & description</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="text-center py-5">
                <img src={idCard} alt="" className="w-50" />
              </div>
            </div>

            <div className="row py-5 mx-auto">
              <div className="col-md-4 ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Display </div>
                </div>
                <div className="px-4"> 1.5 inch, 8-digit LCD display</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Memory </div>
                </div>
                <div className="px-4">16MB RAM, 8MB ROM (Upgradeable) </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Rechargeable Battery </div>
                </div>
                <div className="px-4"> 2000 - 2600mAh (Optional fast charging)</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Charging Port </div>
                </div>
                <div className="px-4">1 Type C Connector</div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Connectivity </div>
                </div>
                <div className="px-4">2G </div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Processor </div>
                </div>
                <div className="px-4"> 32 bit ARM

</div>
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
              <div>
                <p className="fs-1 fw-medium text-center">
                  Table pod with Display
                </p>
                <p className="text-muted text-center">feature & description</p>
              </div>
            </div>
            <div className="row py-5 mx-auto">
              <div className="col-md-4 ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Display </div>
                </div>
                <div className="px-4">1.5 inch, B - digit LCD display
</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Memory </div>
                </div>
                <div className="px-4">16MB RAM, 8MB ROM (Upgradeable) </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Rechargeable Battery </div>
                </div>
                <div className="px-4"> 2000 - 2600mAh (Optional fast charging)</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Charging Port </div>
                </div>
                <div className="px-4">1 Type C Connector</div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Connectivity </div>
                </div>
                <div className="px-4">4G, 2G, 4G + 2G (+ Wi-Fi for all)</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Processor </div>
                </div>
                <div className="px-4">32 bit ARM</div>
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
            <div className="col-md-6">
              <div>
                <p className="fs-1 fw-medium text-center">
                Table Pod With Detachable QR Plate
                </p>
                {/* <p className="text-muted text-center">feature & description</p> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="text-center py-5">
                <img src={technicalspecification} alt="" className="w-50" />
              </div>
            </div>
            <div className="row py-5 mx-auto">
              <div className="col-md-4 ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Display </div>
                </div>
                <div className="px-4"> 1.5 inch, 8-digit LCD display</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Memory </div>
                </div>
                <div className="px-4">16MB RAM, 8MB ROM (Upgradeable) </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Rechargeable Battery </div>
                </div>
                <div className="px-4">2000 - 2600mAh (Optional fast charging)</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Charging Port </div>
                </div>
                <div className="px-4">1 Type C Connector </div>
              </div>
              <div className="col-md-4  ">
                <div className="d-flex align-items-center gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium ">Connectivity </div>
                </div>
                <div className="px-4">4G, 2G, 4G + 2G (+ Wi-Fi for all)</div>
                <div></div>

                <div className="d-flex  align-items-center  gap-2">
                  <MdDoubleArrow />
                  <div className="fs-4 fw-medium">Processor </div>
                </div>
                <div className="px-4"> 32 bit ARM </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
