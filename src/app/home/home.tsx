import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function Home() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout home-container")}>
        <div className={classes("column-layout page-content")}>
          <div className={classes("row-layout main-page-header")}>
            <div className={classes("row-layout group")}>
              <div className={classes("column-layout group_1")}>
                <h4 className={classes("h4")}>
                  <span>All the auto parts you need in one place</span>
                </h4>
                <p className={classes("typography__body-1 text")}>
                  <span>We have the most popular brands and all the parts for your vehicle</span>
                </p>
                <div className={classes("row-layout group_2")}>
                  <IgrSelect outlined="false" label="Year" placeholder="Select Year" className={classes("select")}>
                    <IgrSelectItem value="Option" key="b7f76d1e-42d1-49cf-a1a7-f95805236215">
                      <span key={uuid()}>2023</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="dd845b33-97f7-4e06-b560-2503b017e580">
                      <span key={uuid()}>2022</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="f193c60e-5cf6-4b57-8ad8-b77843e401a3">
                      <span key={uuid()}>2021</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="74f537a2-f61e-44bc-a6d8-c0d1a8b6e5d8">
                      <span key={uuid()}>2020</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="70581349-e091-4e1f-adf4-a1f954dd6ffd">
                      <span key={uuid()}>2019</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="7d516435-7283-4e22-b5e3-454484ba2d45">
                      <span key={uuid()}>2018</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="59a957a8-49a1-4630-a659-0eb321ee4c3c">
                      <span key={uuid()}>2017</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="ad019d00-7d37-4df5-91ef-9869d5e3aee3">
                      <span key={uuid()}>2016</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrSelect outlined="false" label="Brand" placeholder="Select Brand" disabled="true" className={classes("select")}>
                    <IgrSelectItem value="Option" key="0119d5c8-c729-4d66-8b28-42dbf34c88dd">
                      <span key={uuid()}>Hyundai</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="f371856f-f50e-470c-ab79-8fb4bb39c374">
                      <span key={uuid()}>Kia</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="2f429381-77f6-4079-97c0-970abf43d02f">
                      <span key={uuid()}>Mitsubishi</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="70be61e0-77b4-44b6-8cf4-6fbd70115004">
                      <span key={uuid()}>Audi</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="44d1d2ec-93a9-4857-bdbc-ab1cfde236f8">
                      <span key={uuid()}>Chevrolet</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="bcfcc10c-fecf-470d-a00b-548f32ad3e1f">
                      <span key={uuid()}>Toyota</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="58faa12c-917e-4e0a-8670-d621b1c674c1">
                      <span key={uuid()}>Ford</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="Option" key="055f93da-ec65-4273-ac9d-f9b4dd9f0a3c">
                      <span key={uuid()}>Fiat</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrSelect outlined="false" label="Model" placeholder="Select Model" disabled="true" className={classes("select")}>
                    <IgrSelectItem value="Option" key="dbbf80ff-f94d-4ab7-adf6-822345a82891">
                      <span key={uuid()}>Option</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrSelect outlined="false" label="Engine" placeholder="Select Engine" disabled="true" className={classes("select")}>
                    <IgrSelectItem value="Option" key="49b9835c-8857-4184-8706-6920968d756b">
                      <span key={uuid()}>Option</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <div className={classes("row-layout group_3")}>
                    <IgrButton variant="flat" type="button" className={classes("button button_2")}>
                      <span key={uuid()}>SEARCH</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("column-layout content")}>
            <div className={classes("column-layout popular-categories")}>
              <h5 className={classes("h5")}>
                <span>Popular Categories</span>
              </h5>
              <div className={classes("row-layout group_4")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/all-products`)}>
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/photo-1606577924006-27d39b132ae2.jpg" className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>AUTO BODY PARTS</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>Bumpers, Fenders, Mirrors, Hoods, Grilles, Door handles, Windows</span>
                      </h5>
                    </IgrCardHeader>
                  </IgrCard>
                </div>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1616788494670-7243adbb32b2.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>HEADLIGHTS &amp; LIGHTING</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Headlights, Tail, Fog, Turn Signals, Switches, Corner, Off-Road, Bulbs</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1552656967-7a0991a13906.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>ENGINE &amp; DRIVETRAIN</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Catalytic Converters, Radiators, Fuel Systems, Heating, Cranks, Pistons</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1598149949932-e4727f2f7ac4.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>BRAKES &amp; SUSPENSION</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Discs, Shocks, Control Arms, Wheel Hubs, Wheels, Tie Rods</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1614527255138-018e29ff34ee.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>INTERIOR ACCESSORIES</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Seats, Carpet, Floor Mats, Dashboard, Switches, Gauges &amp; Monitors</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/photo-1514316454349-750a7fd3da3a.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>EXTERIOR ACCESSORIES</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Bumpers, Hoods, Grilles, Fog lights, Door Handles, Locks, Covers</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
              </div>
            </div>
            <div className={classes("column-layout popular-categories")}>
              <h5 className={classes("h5")}>
                <span>Featured Products</span>
              </h5>
              <div className={classes("row-layout group_5")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/product-details`)}>
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                      <img src="/src/assets/Alternator1.jpg" className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Gold Alternator</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$59.90</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_1")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                </div>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Winter Tires Set</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$44.50</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button_1 button_1_2")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Headlight Assembly</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$49.50</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button_1 button_1_3")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Spark Plugs</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$11.00</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button_1 button_1_4")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Tail Lamp Assembly</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$19.90</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button_1 button_1_5")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
                    <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Oil Filters</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <h6 className={classes("h6")} key={uuid()}>
                      <span>$24.50</span>
                    </h6>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" type="button" className={classes("button_1 button_1_6")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_shopping_cart</span>
                        </span>
                        <span key={uuid()}>ADD TO CART</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              </div>
            </div>
          </div>
          <div className={classes("row-layout sitemap")}>
            <div className={classes("column-layout group_6")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Contact Us</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>1234 Street Name, CityName, ST</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span> 10520 United States</span>
              </p>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Phone Number</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>1-234-567-8901</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Help</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>FAQ</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Returns</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Coupons &amp; Discounts</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Shipping &amp; Returns</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>About Us</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Company Info</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Press Releases</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Careers</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Reviews</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Services</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Buy Online</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>In-Store</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Repair Help</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Find a Repair Shop</span>
              </p>
            </div>
            <div className={classes("column-layout group_7")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Blog</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Car Building Basics</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Do it Yourself</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Your Home Workshop</span>
              </p>
              <p className={classes("typography__body-2 text_1")}>
                <span>Advanced Bulding</span>
              </p>
            </div>
          </div>
          <div className={classes("row-layout footer")}>
            <p className={classes("typography__body-2 text_3")}>
              <span>Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.</span>
            </p>
            <div className={classes("row-layout group_8")}>
              <p className={classes("typography__body-2 text_4")}>
                <span>Terms of Use</span>
              </p>
              <p className={classes("typography__body-2 text_4")}>
                <span>Privacy Policy</span>
              </p>
              <p className={classes("typography__body-2 text_4")}>
                <span>Site Map</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
