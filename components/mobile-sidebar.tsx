"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

function MobileSidebar({apiLimitCount}:{apiLimitCount : number}) {
    const [isMounted, setisMounted] = useState(false);

    useEffect(()=>{
        setisMounted(true);
    },[])

    if(!isMounted){
        return null;
    }

  return (
    <Sheet>
      <SheetTrigger>
        {/* <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button> */}
        <div className="md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className="p-0">
        <Sidebar apiLimitCount={apiLimitCount}/>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
