import Card from "./Card";
import { useRouter } from "next/router";
import Link from "next/link";


export default function NavigationCard(){
  const router = useRouter();
  const {asPath:pathname} = router;
  const activeElementClasses ='text-sm md:text-md flex md:gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-8 px-6 md:px-8 rounded-md shadow-md shadow-gray-300';
  const nonActiveElementClasses ='text-sm md:text-md flex md:gap-1 gap-3 flex gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300';
return(
<Card noPadding={true}>
        <div className="px-4 py-2 flex justify-between md:block shadow-md shadow-gray-500 md:shadow-none">
        
        <h2 className="text-gray-300 mb-3 hidden md:block">Navigation</h2>
        <Link href="/" className={pathname === '/' ? activeElementClasses : nonActiveElementClasses}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>
          <span className="hidden md:block">Home</span>
          </Link>
        <Link href="/profile/friends" className={pathname === '/profile/friends' ? activeElementClasses : nonActiveElementClasses}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>
<span className="hidden md:block">Friends</span>
  </Link>
  <Link href="/saved" className={pathname === '/saved' ? activeElementClasses : nonActiveElementClasses}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
</svg>
<span className="hidden md:block">Saved Content</span>
          </Link>
          <Link href="/notifications" className={pathname === '/notifications' ? activeElementClasses : nonActiveElementClasses}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
</svg>
<span className="hidden md:block">Notifications</span>
          </Link>
          <Link href="/login" className={pathname === '/login' ? activeElementClasses : nonActiveElementClasses}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
<span className="hidden md:block">Logout</span>
          </Link>
          </div>
      </Card>

)}