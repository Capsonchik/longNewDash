'use client'

import {Drawer} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectSocDrawerOpen} from "@/store/drawersSlice/drawers.selectors";
import {AppDispatch} from "@/store/store";
import {setSocDrawerStatus} from "@/store/drawersSlice/drawers.slice";
import {SocNav} from "@/components/drawers/socDrawer/socDrawerComponents/nav/SocNav";

export const SocDrawer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector(selectSocDrawerOpen);

  return (
    <Drawer style={{width: '80vw'}} open={status}
            onClose={() => dispatch(setSocDrawerStatus(false))}>
      <Drawer.Body style={{padding: '20px 60px', overflow: 'auto'}}>
        <SocNav/>
      </Drawer.Body>
    </Drawer>
  );
};