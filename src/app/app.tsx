import { IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrButtonModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout group")}>
          <img src="/src/assets/AutoShop_Logo.svg" onClick={() => navigate(`/home`)} className={classes("image")} />
          <div className={classes("row-layout group_1")}>
            <IgrButton variant="flat" type="button" clicked={() => navigate(`/all-products`)} className={classes("button")}>
              <span key={uuid()}>Auto Body Parts</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button")}>
              <span key={uuid()}>Lighting</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button")}>
              <span key={uuid()}>Engine &amp; Drivetrain</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button")}>
              <span key={uuid()}>Brakes &amp; Suspension</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button")}>
              <span key={uuid()}>Engine &amp; Drivetrain</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button")}>
              <span key={uuid()}>Interior</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button")}>
              <span key={uuid()}>Exterior</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>account_circle</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrIconButton variant="flat" clicked={() => navigate(`/shopping-cart`)} className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>shopping_cart</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </div>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
