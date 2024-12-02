import { IgrBadge, IgrBadgeModule, IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrToggleButton, IgrToggleButtonModule } from 'igniteui-react';
import { useState } from 'react';
import styles from './product-details.module.css';
import createClassTransformer from '../style-utils';

IgrBadgeModule.register();
IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrToggleButtonModule.register();

export default function ProductDetails() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<number | undefined>(4.5);
  const [value1, setValue1] = useState<string | undefined>('1');
  const [value2, setValue2] = useState<number | undefined>(4);
  const [value3, setValue3] = useState<number | undefined>(3.5);
  const [value4, setValue4] = useState<number | undefined>(5);

  return (
    <>
      <div className={classes("column-layout product-details-container")}>
        <div className={classes("column-layout page-content")}>
          <div className={classes("column-layout inner-pages-header")}>
            <img src="/src/assets/AutoDeals_Logo.svg" className={classes("image")} />
            <p className={classes("typography__body-1 text")}>
              <span>Enjoy 20% off on all your weekend purchases</span>
            </p>
          </div>
          <div className={classes("column-layout content")}>
            <div className={classes("column-layout group")}>
              <div className={classes("row-layout breadcrumbs")}>
                <a href="" className={classes("typography__body-2 hyperlink")}>
                  <span>Home</span>
                </a>
                <p className={classes("typography__body-2 text_1")}>
                  <span>/</span>
                </p>
                <a href="" className={classes("typography__body-2 hyperlink")}>
                  <span>Auto Body Parts</span>
                </a>
                <p className={classes("typography__body-2 text_1")}>
                  <span>/</span>
                </p>
                <a href="" className={classes("typography__body-2 hyperlink")}>
                  <span>Engine &amp; Drivetrain</span>
                </a>
                <p className={classes("typography__body-2 text_1")}>
                  <span>/</span>
                </p>
                <a href="" className={classes("typography__body-2 hyperlink")}>
                  <span>Starters, Alternators, Batteries &amp; Components</span>
                </a>
                <p className={classes("typography__body-2 text_1")}>
                  <span>/</span>
                </p>
                <p className={classes("typography__body-2 text_2")}>
                  <span>Alternator</span>
                </p>
              </div>
              <div className={classes("row-layout product-details")}>
                <div className={classes("column-layout group_1")}>
                  <div className={classes("group_2")}></div>
                  <div className={classes("group_3")}></div>
                  <div className={classes("group_4")}></div>
                </div>
                <div className={classes("row-layout group_5")}>
                  <img src="/src/assets/Alternator1.jpg" className={classes("image_1")} />
                </div>
                <div className={classes("column-layout group_6")}>
                  <h5 className={classes("content_1")}>
                    <span>Gold Alternator</span>
                  </h5>
                  <div className={classes("row-layout group_7")}>
                    <IgrRating value={value} change={(_c, e) => setValue(e.detail)} className={classes("rating")}></IgrRating>
                    <a href="" className={classes("typography__body-2 hyperlink_1")}>
                      <span>(2 customer reviews)</span>
                    </a>
                  </div>
                  <h4 className={classes("content_4")}>
                    <span>$59.90</span>
                  </h4>
                  <p className={classes("typography__subtitle-1 text_3")}>
                    <span>Part #ABC123-456789 | SKU: A1234-01</span>
                  </p>
                  <a href="" className={classes("typography__body-2 hyperlink_2")}>
                    <span>Limited Lifetime Warranty</span>
                  </a>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>Generic Brand alternators are engineered to provide the amp output necessary to power today’s vehicles. Every unit is 100% NEW (not remanufactured) and made with proprietary components and processes to ensure maximum life and performance.</span>
                  </p>
                  <IgrBadge variant="success" className={classes("badge")}>
                    <span key={uuid()}>IN STOCK</span>
                  </IgrBadge>
                  <div className={classes("row-layout group_8")}>
                    <IgrSelect outlined="false" label="Quantitiy" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("select")}>
                      <IgrSelectItem value="1" key="e0910de9-4a98-4d01-b279-4d466162494c">
                        <span key={uuid()}>1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="1" key="e42ce717-1bea-4b5d-a921-4eadacb8c759">
                        <span key={uuid()}>2</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="1" key="f176b785-5c58-408e-9a24-a148757b255a">
                        <span key={uuid()}>3</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="1" key="e047b361-9fcf-4690-a693-2b7d8b6c18d6">
                        <span key={uuid()}>4</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                  <p className={classes("typography__body-2 content_1")}>
                    <span>Select delivery option:</span>
                  </p>
                  <IgrButtonGroup className={classes("button-group")}>
                    <IgrToggleButton key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>store_mall_directory</span>
                      </span>
                      <span key={uuid()}>Free In-Store Pickup</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrToggleButton>
                    <IgrToggleButton key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>home</span>
                      </span>
                      <span key={uuid()}>Home Delivery</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrToggleButton>
                  </IgrButtonGroup>
                  <IgrButton type="button" className={classes("button button_2")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>shopping_cart</span>
                    </span>
                    <span key={uuid()}>ADD TO CART</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("row-layout product-info")}>
                <div className={classes("column-layout specs")}>
                  <h5 className={classes("content_2")}>
                    <span>Product Specifications</span>
                  </h5>
                  <div className={classes("column-layout table")}>
                    <div className={classes("row-layout group_9")}>
                      <p className={classes("typography__body-1 text_5")}>
                        <span>Part #  </span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>ABC123-456789</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_10")}>
                      <p className={classes("typography__body-1 text_5")}>
                        <span>SKU #  </span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>740988</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_9")}>
                      <p className={classes("typography__body-1 text_5")}>
                        <span>Weight</span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>10 lbs</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_10")}>
                      <p className={classes("typography__body-1 text_5")}>
                        <span>Type</span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>Alternator</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_9")}>
                      <p className={classes("typography__body-1 text_5")}>
                        <span>System Voltage  </span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>12 V</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_10")}>
                      <p className={classes("typography__body-1 text_6")}>
                        <span>Pulleys Included  </span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>2</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes("column-layout description")}>
                  <h5 className={classes("content_1")}>
                    <span>Product Description</span>
                  </h5>
                  <div className={classes("column-layout table")}>
                    <div className={classes("row-layout group_11")}>
                      <span className={classes("material-icons icon_1")}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                      <p className={classes("typography__body-1 text_7")}>
                        <span>Key components are greased to help with long term reliability in harsh conditions</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_11")}>
                      <span className={classes("material-icons icon_1")}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                      <p className={classes("typography__body-1 text_7")}>
                        <span>Every unit is built with 100% NEW components that are designed to meet the highest quality standards</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_11")}>
                      <span className={classes("material-icons icon_1")}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                      <p className={classes("typography__body-1 text_7")}>
                        <span>Every unit is triple tested (component, subassembly and end of line) to ensure quality and performance</span>
                      </p>
                    </div>
                  </div>
                  <p className={classes("typography__body-2 content_2")}>
                    <span>New Alternators are manufactured with all new components and are the ideal high quality replacement for many vehicles on the road today. Key components are lubricated to help with performance and long life reliability. Alternators have regulators that are computer tested for voltage stability, terminal function, and electronic circuit board integrity. These premium aftermarket replacement components are manufactured to meet your expectations for fit, form, and function. Some ACDelco Gold parts may have formerly appeared as ACDelco Professional.</span>
                  </p>
                </div>
              </div>
              <div className={classes("column-layout also-purchased")}>
                <h5 className={classes("content_1")}>
                  <span>Customers Also Purchased</span>
                </h5>
                <div className={classes("row-layout group_12")}>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Alternator1.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Gold Alternator</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value} change={(_c, e) => setValue(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("content_4")} key={uuid()}>
                        <span>$59.90</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_1")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Tail Lamp Assembly</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("content_4")} key={uuid()}>
                        <span>$19.90</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_2")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Spark Plugs</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value3} change={(_c, e) => setValue3(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("content_4")} key={uuid()}>
                        <span>$11.00</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_3")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Oil Filters</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value4} change={(_c, e) => setValue4(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("content_4")} key={uuid()}>
                        <span>$24.50</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_4")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Headlight Assembly</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value3} change={(_c, e) => setValue3(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("content_4")} key={uuid()}>
                        <span>$49.50</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_5")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Winter Tires Set</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value} change={(_c, e) => setValue(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("content_4")} key={uuid()}>
                        <span>$44.50</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_6")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_51128759_l-2015.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Exhaust Pipe</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value4} change={(_c, e) => setValue4(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$34.50</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_7")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
                            <span key={uuid()}>add_shopping_cart</span>
                          </span>
                          <span key={uuid()}>ADD TO CART</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard elevated="true" className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_63371615_l-2015.jpg" className={classes("image_2")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Battery</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>SKU: A1234-01</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <div className={classes("row-layout group_13")} key={uuid()}>
                        <IgrRating value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("rating_1")}></IgrRating>
                      </div>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$24.95</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_8")}>
                          <span className={classes("material-icons icon_2")} key={uuid()}>
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
          </div>
          <div className={classes("row-layout sitemap")}>
            <div className={classes("column-layout group_14")}>
              <p className={classes("typography__subtitle-2 content_1")}>
                <span>Contact Us</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>1234 Street Name, CityName, ST</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span> 10520 United States</span>
              </p>
              <p className={classes("typography__subtitle-2 text_8")}>
                <span>Phone Number</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>1-234-567-8901</span>
              </p>
            </div>
            <div className={classes("column-layout table")}>
              <p className={classes("typography__subtitle-2 content_1")}>
                <span>Help</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>FAQ</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Returns</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Coupons &amp; Discounts</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Shipping &amp; Returns</span>
              </p>
            </div>
            <div className={classes("column-layout table")}>
              <p className={classes("typography__subtitle-2 content_1")}>
                <span>About Us</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Company Info</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Press Releases</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Careers</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Reviews</span>
              </p>
            </div>
            <div className={classes("column-layout table")}>
              <p className={classes("typography__subtitle-2 content_1")}>
                <span>Services</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Buy Online</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>In-Store</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Repair Help</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Find a Repair Shop</span>
              </p>
            </div>
            <div className={classes("column-layout table")}>
              <p className={classes("typography__subtitle-2 content_1")}>
                <span>Blog</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Car Building Basics</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Do it Yourself</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Your Home Workshop</span>
              </p>
              <p className={classes("typography__body-2 content_1")}>
                <span>Advanced Bulding</span>
              </p>
            </div>
          </div>
          <div className={classes("row-layout footer")}>
            <p className={classes("typography__body-2 text_9")}>
              <span>Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.</span>
            </p>
            <div className={classes("row-layout group_15")}>
              <p className={classes("typography__body-2 text_10")}>
                <span>Terms of Use</span>
              </p>
              <p className={classes("typography__body-2 text_10")}>
                <span>Privacy Policy</span>
              </p>
              <p className={classes("typography__body-2 text_10")}>
                <span>Site Map</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
