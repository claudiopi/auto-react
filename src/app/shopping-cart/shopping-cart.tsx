import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import styles from './shopping-cart.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function ShoppingCart() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("column-layout shopping-cart-container")}>
        <div className={classes("column-layout page-content")}>
          <div className={classes("column-layout inner-pages-header")}>
            <img src="/src/assets/AutoDeals_Logo.svg" className={classes("image")} />
            <p className={classes("typography__body-1 text")}>
              <span>Enjoy 20% off on all your weekend purchases</span>
            </p>
          </div>
          <div className={classes("row-layout content")}>
            <div className={classes("column-layout group")}>
              <h5 className={classes("content_5")}>
                <span>Shopping Cart</span>
              </h5>
              <div className={classes("row-layout group_1")}>
                <div className={classes("column-layout group_2")}>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Alternator1.jpg" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <div className={classes("row-layout group_3")} key={uuid()}>
                          <div className={classes("row-layout group_4")}>
                            <p className={classes("typography__body-1 content_1")}>
                              <span>Gold Alternator </span>
                            </p>
                          </div>
                          <div className={classes("row-layout group_5")}>
                            <p className={classes("typography__body-1 text_2")}>
                              <span>Qty:</span>
                            </p>
                            <div className={classes("row-layout group_6")}>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>remove</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                              <p className={classes("typography__body-1 text_3")}>
                                <span>1</span>
                              </p>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>add</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                            </div>
                          </div>
                          <div className={classes("row-layout group_7")}>
                            <p className={classes("typography__body-1 text_4")}>
                              <span>$59.90</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>remove_shopping_cart</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Depositphotos_91150104_l-2015.jpg" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <div className={classes("row-layout group_3")} key={uuid()}>
                          <div className={classes("row-layout group_8")}>
                            <p className={classes("typography__body-1 text_5")}>
                              <span>Tail Lamp Assembly</span>
                            </p>
                          </div>
                          <div className={classes("row-layout group_5")}>
                            <p className={classes("typography__body-1 text_2")}>
                              <span>Qty:</span>
                            </p>
                            <div className={classes("row-layout group_6")}>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>remove</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                              <p className={classes("typography__body-1 text_3")}>
                                <span>1</span>
                              </p>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>add</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                            </div>
                          </div>
                          <div className={classes("row-layout group_7")}>
                            <p className={classes("typography__body-1 text_4")}>
                              <span>$19.50</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>remove_shopping_cart</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Depositphotos_114068560_l-2015.jpg" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <div className={classes("row-layout group_3")} key={uuid()}>
                          <div className={classes("row-layout group_8")}>
                            <p className={classes("typography__body-1 text_5")}>
                              <span>Winter Tires Set</span>
                            </p>
                          </div>
                          <div className={classes("row-layout group_5")}>
                            <p className={classes("typography__body-1 text_2")}>
                              <span>Qty:</span>
                            </p>
                            <div className={classes("row-layout group_6")}>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>remove</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                              <p className={classes("typography__body-1 text_3")}>
                                <span>1</span>
                              </p>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>add</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                            </div>
                          </div>
                          <div className={classes("row-layout group_7")}>
                            <p className={classes("typography__body-1 text_4")}>
                              <span>$59.90</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>remove_shopping_cart</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Depositphotos_20993125_l-2015.jpg" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <div className={classes("row-layout group_3")} key={uuid()}>
                          <div className={classes("row-layout group_4")}>
                            <p className={classes("typography__body-1 content_1")}>
                              <span>Oil Filter</span>
                            </p>
                          </div>
                          <div className={classes("row-layout group_5")}>
                            <p className={classes("typography__body-1 text_2")}>
                              <span>Qty:</span>
                            </p>
                            <div className={classes("row-layout group_6")}>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>remove</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                              <p className={classes("typography__body-1 text_3")}>
                                <span>1</span>
                              </p>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>add</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                            </div>
                          </div>
                          <div className={classes("row-layout group_7")}>
                            <p className={classes("typography__body-1 text_4")}>
                              <span>$59.90</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>remove_shopping_cart</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Depositphotos_12011807_l-2015.jpg" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <div className={classes("row-layout group_3")} key={uuid()}>
                          <div className={classes("row-layout group_8")}>
                            <p className={classes("typography__body-1 text_5")}>
                              <span>Headlight Assembly</span>
                            </p>
                          </div>
                          <div className={classes("row-layout group_5")}>
                            <p className={classes("typography__body-1 text_2")}>
                              <span>Qty:</span>
                            </p>
                            <div className={classes("row-layout group_6")}>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>remove</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                              <p className={classes("typography__body-1 text_3")}>
                                <span>1</span>
                              </p>
                              <IgrIconButton variant="flat">
                                <span className={classes("material-icons")} key={uuid()}>
                                  <span key={uuid()}>add</span>
                                </span>
                                <IgrRipple key={uuid()}></IgrRipple>
                              </IgrIconButton>
                            </div>
                          </div>
                          <div className={classes("row-layout group_7")}>
                            <p className={classes("typography__body-1 text_4")}>
                              <span>$59.90</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>remove_shopping_cart</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                </div>
                <div className={classes("column-layout group_9")}>
                  <h6 className={classes("content_1")}>
                    <span>Cart totals</span>
                  </h6>
                  <div className={classes("column-layout group_10")}>
                    <div className={classes("row-layout group_11")}>
                      <p className={classes("typography__subtitle-2 content_2")}>
                        <span>Subtotal</span>
                      </p>
                      <p className={classes("typography__body-1 content_3")}>
                        <span>$198.30</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_11")}>
                      <p className={classes("typography__subtitle-2 content_2")}>
                        <span>Shipping</span>
                      </p>
                      <p className={classes("typography__body-1 content_3")}>
                        <span>$0</span>
                      </p>
                    </div>
                    <div className={classes("column-layout group_12")}>
                      <p className={classes("typography__body-2 text_4")}>
                        <span>Shipping wiil be calculated at checkout</span>
                      </p>
                      <a href="" className={classes("typography__body-2 hyperlink")}>
                        <span>Estimate shipping</span>
                      </a>
                    </div>
                    <div className={classes("row-layout group_11")}>
                      <h6 className={classes("content_2")}>
                        <span>Total</span>
                      </h6>
                      <h6 className={classes("content_3")}>
                        <span>$198.30</span>
                      </h6>
                    </div>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrButton variant="flat" type="button" className={classes("button")}>
                      <span key={uuid()}>PROCEED TO CHECKOUT</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("row-layout sitemap")}>
            <div className={classes("column-layout group_14")}>
              <p className={classes("typography__subtitle-2 content_5")}>
                <span>Contact Us</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>1234 Street Name, CityName, ST</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span> 10520 United States</span>
              </p>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Phone Number</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>1-234-567-8901</span>
              </p>
            </div>
            <div className={classes("column-layout group_15")}>
              <p className={classes("typography__subtitle-2 content_5")}>
                <span>Help</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>FAQ</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Returns</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Coupons &amp; Discounts</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Shipping &amp; Returns</span>
              </p>
            </div>
            <div className={classes("column-layout group_15")}>
              <p className={classes("typography__subtitle-2 content_5")}>
                <span>About Us</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Company Info</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Press Releases</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Careers</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Reviews</span>
              </p>
            </div>
            <div className={classes("column-layout group_15")}>
              <p className={classes("typography__subtitle-2 content_5")}>
                <span>Services</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Buy Online</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>In-Store</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Repair Help</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Find a Repair Shop</span>
              </p>
            </div>
            <div className={classes("column-layout group_15")}>
              <p className={classes("typography__subtitle-2 content_5")}>
                <span>Blog</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Car Building Basics</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Do it Yourself</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Your Home Workshop</span>
              </p>
              <p className={classes("typography__body-2 content_5")}>
                <span>Advanced Bulding</span>
              </p>
            </div>
          </div>
          <div className={classes("row-layout footer")}>
            <p className={classes("typography__body-2 text_6")}>
              <span>Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.</span>
            </p>
            <div className={classes("row-layout group_16")}>
              <p className={classes("typography__body-2 text_7")}>
                <span>Terms of Use</span>
              </p>
              <p className={classes("typography__body-2 text_7")}>
                <span>Privacy Policy</span>
              </p>
              <p className={classes("typography__body-2 text_7")}>
                <span>Site Map</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
