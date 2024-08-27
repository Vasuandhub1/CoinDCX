import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


export default function HeadNavigation() {
  return (
    <div className='bg-slate-900 p-2'>
      <div>
        <div className='flex justify-evenly items-center'>
            <div><img width={"150rem"} src="https://coindcx.com/assets/new-home-page/CD_LogoWhite.svg" alt="" /></div>
            <div><img width={"100%"} src="https://coindcx.com/assets/new-home-page/Fold1_MegaMenu_white.svg" alt="" /></div>

            <div className=''>
            <DropdownMenu>
  <DropdownMenuTrigger className='font-bold text-white text-xl'>TRADE</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>

            <div className=''><DropdownMenu>
  <DropdownMenuTrigger className='font-bold text-white text-xl'>ORDER</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>

        


            

            <div className=''><DropdownMenu>
  <DropdownMenuTrigger className='font-bold text-white text-xl'>QUICKBUY</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>

            <div className=''><DropdownMenu>
  <DropdownMenuTrigger className='font-bold text-white text-xl'>DCXLearn</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>

            <div><img width={"100%"} src="https://coindcx.com/assets/new-home-page/Fold1_Support_white.svg" alt="" /></div>
            <div><img width={"100%"} src="https://coindcx.com/assets/new-home-page/Fold1_NotificationRead_white.svg" alt="" /></div>

            <div className=''><DropdownMenu>
  <DropdownMenuTrigger className='font-bold text-white text-xl'>TRADE</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>

            <div className=''><DropdownMenu>
  <DropdownMenuTrigger className='font-bold text-white text-xl'>PORTFOLIO</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>

            <div className=''><DropdownMenu>
  <DropdownMenuTrigger className='font-bold text-white text-xl'>INR</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>
        </div>
      </div>
    </div>
  )
}
