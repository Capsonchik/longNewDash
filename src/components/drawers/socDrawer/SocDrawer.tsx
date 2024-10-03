'use client'

import {Drawer, Placeholder} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectSocDrawerOpen} from "@/store/drawersSlice/drawers.selectors";
import {AppDispatch} from "@/store/store";
import {setSocDrawerStatus} from "@/store/drawersSlice/drawers.slice";

export const SocDrawer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector(selectSocDrawerOpen);

  return (
    <Drawer open={status} onClose={() => dispatch(setSocDrawerStatus(false))}>
      <Drawer.Body>
        <Placeholder.Paragraph/>
      </Drawer.Body>
    </Drawer>
  );
};