import ToggleThemeButton from '@/components/toggle-theme-button';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <nav className='flex items-center justify-between p-4 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border sticky top-0 z-50 px-20'>
        <div className='flex justify-between items-center gap-2'>
          <h1 className='text-2xl'>ShiftFlow</h1>
        </div>
      </nav>

      <header className='mx-20 mt-10 flex'>
        <div>
          <h1 className='text-6xl mt-10 animate-enter-left'>
            Optimize your shipping.<br />
            Multiply your profits.
          </h1>

          <p className='mt-2 animate-enter-left'>
            Connect your e-commerce to the AI platform that automates inventory,<br />
            predicts demand, and cuts shipping costs by up to 35%.
          </p>

          <Button className="mt-10 animate-enter-left cursor-pointer" size="lg">Request Free Demo</Button>
        </div>
        
        <svg className='stroke-accent-foreground size-100 ml-auto animate-enter-right' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="34.52" cy="11.43" r="5.82"></circle><circle cx="53.63" cy="31.6" r="5.82"></circle><circle cx="34.52" cy="50.57" r="5.82"></circle><circle cx="15.16" cy="42.03" r="5.82"></circle><circle cx="15.16" cy="19.27" r="5.82"></circle><circle cx="34.51" cy="29.27" r="4.7"></circle><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"></line><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"></line><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"></line><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"></line><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"></line><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"></line><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"></line><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"></line><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"></line></g></svg>
      </header>

      <hr className='mx-20'/>

      {/* Features Section */}
      <section className='mx-20 my-10'>
        <h2 className='text-2xl'>Why Choose ShiftFlow?</h2>

        <div className='flex mt-10 gap-6'>
          <div className='bg-card rounded-2xl p-4 w-70 h-80 flex flex-col gap-4'>
            <svg className='size-40 fill-accent-foreground stroke-card-foreground mx-auto' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 19L20.5303 19.5303C20.8232 19.2374 20.8232 18.7626 20.5303 18.4697L20 19ZM8 4.25C7.58579 4.25 7.25 4.58579 7.25 5C7.25 5.41421 7.58579 5.75 8 5.75V4.25ZM18.5303 16.4697C18.2374 16.1768 17.7626 16.1768 17.4697 16.4697C17.1768 16.7626 17.1768 17.2374 17.4697 17.5303L18.5303 16.4697ZM17.4697 20.4697C17.1768 20.7626 17.1768 21.2374 17.4697 21.5303C17.7626 21.8232 18.2374 21.8232 18.5303 21.5303L17.4697 20.4697ZM13.75 18.25C13.3358 18.25 13 18.5858 13 19C13 19.4142 13.3358 19.75 13.75 19.75V18.25ZM10 19.75C10.4142 19.75 10.75 19.4142 10.75 19C10.75 18.5858 10.4142 18.25 10 18.25V19.75ZM11 5.75C11.4142 5.75 11.75 5.41421 11.75 5C11.75 4.58579 11.4142 4.25 11 4.25V5.75ZM15 4.25C14.5858 4.25 14.25 4.58579 14.25 5C14.25 5.41421 14.5858 5.75 15 5.75V4.25ZM7.5 12.75H16.5V11.25H7.5V12.75ZM20.5303 18.4697L18.5303 16.4697L17.4697 17.5303L19.4697 19.5303L20.5303 18.4697ZM19.4697 18.4697L17.4697 20.4697L18.5303 21.5303L20.5303 19.5303L19.4697 18.4697ZM20.75 8.5C20.75 6.15279 18.8472 4.25 16.5 4.25V5.75C18.0188 5.75 19.25 6.98122 19.25 8.5H20.75ZM16.5 12.75C18.8472 12.75 20.75 10.8472 20.75 8.5H19.25C19.25 10.0188 18.0188 11.25 16.5 11.25V12.75ZM4.75 15.5C4.75 13.9812 5.98122 12.75 7.5 12.75V11.25C5.15279 11.25 3.25 13.1528 3.25 15.5H4.75ZM7.5 18.25C5.98122 18.25 4.75 17.0188 4.75 15.5H3.25C3.25 17.8472 5.15279 19.75 7.5 19.75V18.25ZM20 18.25H13.75V19.75H20V18.25ZM10 18.25H7.5V19.75H10V18.25ZM11 4.25H8V5.75H11V4.25ZM16.5 4.25H15V5.75H16.5V4.25Z" fill="#ffffff"></path> <circle cx="6" cy="5" r="2" stroke="#ffffff" stroke-width="1.5"></circle> </g></svg>

            <div>
              <h3 className='text-xl'>Smart Routing</h3>
              <p>Automated courier selection for the fastest, cheapest routes.</p>
            </div>
          </div>

          <div className='bg-card rounded-2xl p-4 w-70 h-80 flex flex-col gap-4'>
            <svg className='size-40 fill-card-foreground mx-auto' fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M746.667 106.667H1173.33V1493.33H746.667V106.667ZM533.333 533.333H106.667V1493.33H533.333V533.333ZM1920 1706.67H0V1824H1920V1706.67ZM1813.33 746.667H1386.67V1493.33H1813.33V746.667Z"></path> </g></svg>

            <div>
              <h3 className='text-xl'>Predictive Analytics</h3>
              <p>AI-driven demand forecasting to eliminate overstocking.</p>
            </div>
          </div>

          <div className='bg-card rounded-2xl p-4 w-70 h-80 flex flex-col gap-4'>
            <svg className='size-40 fill-card-foreground mx-auto' fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M746.667 106.667H1173.33V1493.33H746.667V106.667ZM533.333 533.333H106.667V1493.33H533.333V533.333ZM1920 1706.67H0V1824H1920V1706.67ZM1813.33 746.667H1386.67V1493.33H1813.33V746.667Z"></path> </g></svg>

            <div>
              <h3 className='text-xl'>Real-time Dashboard</h3>
              <p>Track every shipment, order, and performance metric in one single view.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
