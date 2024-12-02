import { IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrToggleButton, IgrToggleButtonModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './all-products.module.css';
import createClassTransformer from '../style-utils';

IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrToggleButtonModule.register();

export default function AllProducts() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const dropdown = useRef<IgrDropdown>(null);

  return (
    <>
      <div className={classes("column-layout all-products-container")}>
        <div className={classes("column-layout page-content")}>
          <div className={classes("column-layout inner-pages-header")}>
            <img src="/src/assets/AutoDeals_Logo.svg" className={classes("image")} />
            <p className={classes("typography__body-1 text")}>
              <span>Enjoy 20% off on all your weekend purchases</span>
            </p>
          </div>
          <div className={classes("row-layout content")}>
            <div className={classes("row-layout group")}>
              <div className={classes("column-layout filters")}>
                <div className={classes("column-layout group_1")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>CATEGORY</span>
                  </p>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>General Body Parts</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Lighting</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Engine &amp; Drivetrain</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Break &amp; Suspension</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Interior</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Exterior</div>
                    </IgrListItem>
                  </IgrList>
                  <a href="" className={classes("typography__body-2 hyperlink")}>
                    <span>Show All</span>
                  </a>
                </div>
                <div className={classes("column-layout group_1")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>PRICE</span>
                  </p>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>$1 - $10</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>$10 - $20</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>$20 - $50</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>$50 - $100</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>$100 and Up</div>
                    </IgrListItem>
                  </IgrList>
                  <a href="" className={classes("typography__body-2 hyperlink")}>
                    <span>Show All</span>
                  </a>
                </div>
                <div className={classes("column-layout group_1")}>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>BRAND</span>
                  </p>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Anzo</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Dorman</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Hella</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Keystone Collision</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Pilot Certified</div>
                    </IgrListItem>
                  </IgrList>
                  <a href="" className={classes("typography__body-2 hyperlink")}>
                    <span>Show All</span>
                  </a>
                </div>
              </div>
              <div className={classes("column-layout products")}>
                <div className={classes("row-layout group_2")}>
                  <h5 className={classes("content_1")}>
                    <span>Newest Arrivals</span>
                  </h5>
                  <div className={classes("row-layout group_3")}>
                    <p className={classes("typography__body-1 content_1")}>
                      <span>1-6 OF 202 RESULTS</span>
                    </p>
                    <IgrButton variant="flat" type="button" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button")}>
                      <span key={uuid()}>SORT BY</span>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>keyboard_arrow_down</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Newest Arrivals</span>
                      </IgrDropdownItem>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Featured</span>
                      </IgrDropdownItem>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Price: Low to High</span>
                      </IgrDropdownItem>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Price: High to Low</span>
                      </IgrDropdownItem>
                      <IgrDropdownItem key={uuid()}>
                        <span key={uuid()}>Avg. Customer Review</span>
                      </IgrDropdownItem>
                    </IgrDropdown>
                  </div>
                </div>
                <div className={classes("row-layout group_4")}>
                  <div style={{display: 'contents'}} onClick={() => navigate(`/product-details`)}>
                    <IgrCard className={classes("card")}>
                      <IgrCardMedia className={classes("media-content")} key={uuid()}>
                        <img src="/src/assets/Alternator1.jpg" className={classes("image_1")} key={uuid()} />
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" className={classes("image_1")} key={uuid()} />
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" className={classes("image_1")} key={uuid()} />
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" className={classes("image_1")} key={uuid()} />
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_7243970_l-2015.jpg" className={classes("image_1")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Engine pistons and cog</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$32.90</span>
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" className={classes("image_1")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Winter tires set</span>
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
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_15825769_l-2015.jpg" className={classes("image_1")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Carboxylic bumper</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$49.90</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_7")}>
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_63371615_l-2015.jpg" className={classes("image_1")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Battery</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$24.95</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_8")}>
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_79651016_l-2015.jpg" className={classes("image_1")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Car Wheel</span>
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
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_9")}>
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_51128759_l-2015.jpg" className={classes("image_1")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Chrome exhaust pipe</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$34.50</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_10")}>
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" className={classes("image_1")} key={uuid()} />
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
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_11")}>
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
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/Depositphotos_303215620_l-2015.jpg" className={classes("image_1")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Braking Discs</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>This is a brief product description, not longer than 2 lines of text.</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")} key={uuid()}>
                      <h6 className={classes("h6")} key={uuid()}>
                        <span>$21.99</span>
                      </h6>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrButton variant="flat" type="button" className={classes("button_1 button_1_12")}>
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
                <div className={classes("row-layout group_5")}>
                  <div className={classes("row-layout group_6")}>
                    <IgrButton variant="flat" type="button" className={classes("button")}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>arrow_back</span>
                      </span>
                      <span key={uuid()}>PREVIOUS</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButtonGroup className={classes("button-group")}>
                      <IgrToggleButton key={uuid()}>
                        <span key={uuid()}>1</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrToggleButton>
                      <IgrToggleButton key={uuid()}>
                        <span key={uuid()}>2</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrToggleButton>
                      <IgrToggleButton key={uuid()}>
                        <span key={uuid()}>3</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrToggleButton>
                      <IgrToggleButton key={uuid()}>
                        <span key={uuid()}>4</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrToggleButton>
                      <IgrToggleButton key={uuid()}>
                        <span key={uuid()}>5</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrToggleButton>
                    </IgrButtonGroup>
                    <IgrButton variant="flat" type="button" className={classes("button")}>
                      <span key={uuid()}>NEXT</span>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>arrow_forward</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("row-layout sitemap")}>
            <div className={classes("column-layout group_7")}>
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
            <div className={classes("column-layout group_8")}>
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
            <div className={classes("column-layout group_8")}>
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
            <div className={classes("column-layout group_8")}>
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
            <div className={classes("column-layout group_8")}>
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
            <div className={classes("row-layout group_9")}>
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
