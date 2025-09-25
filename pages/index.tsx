import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Section, Card, Button } from '../components/index';
import { APP_ITEMS, TESTIMONIALS, WHY_CHOOSE_US, CONTACT_INFO, NAV_LINKS } from '../constants';
import { AppItem, ItemType, DetailType, ClassSchedule, PricingPlan } from '../types';

// --- HomePage --- //
export const HomePage: React.FC = () => {
    const services = APP_ITEMS.filter(item => item.type === ItemType.Service);
    const products = APP_ITEMS.filter(item => item.type === ItemType.Product);
    
    return (
        <>
            {/* Hero Section */}
            <Section className="min-h-[60vh] flex items-center text-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#155d63]">
                            فناوری پیشرو،
                        </span>
                        <br />
                        سلامتی پایدار برای سالمندان
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-800 mb-8">
                        ما در تیم "مدیریت فناوری و سلامت نقره ای" با ترکیب نوآوری و مراقبت، به دنبال ارتقای کیفیت زندگی سالمندان عزیز هستیم.
                    </p>
                    <NavLink to="/services-products">
                        <Button variant="primary">خدمات و محصولات ما</Button>
                    </NavLink>
                </div>
            </Section>

            {/* About Us Overview */}
            <Section id="about-overview">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">درباره ما</h2>
                    <p className="max-w-3xl mx-auto text-gray-800 mb-6">
                        ما تیمی از متخصصان هستیم که با هدف بهبود سلامت و رفاه سالمندان از طریق فناوری‌های نوین گرد هم آمده‌ایم. ماموریت ما ارائه راه‌حل‌های هوشمند، کارآمد و انسان‌محور است.
                    </p>
                    <NavLink to="/about" className="font-semibold text-[#2596be] hover:underline">بیشتر با ما آشنا شوید &larr;</NavLink>
                </div>
            </Section>

            {/* Services Showcase */}
            <Section>
                <h2 className="text-3xl font-bold text-center mb-12">خدمات ما</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map(item => <Card key={item.id} item={item} />)}
                </div>
            </Section>

            {/* Products Highlight */}
            <Section>
                <h2 className="text-3xl font-bold text-center mb-12">محصولات ما</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {products.map(item => <Card key={item.id} item={item} />)}
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section>
                <h2 className="text-3xl font-bold text-center mb-12">چرا ما را انتخاب کنید؟</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {WHY_CHOOSE_US.map(item => (
                        <div key={item.title} className="p-6 border border-gray-300">
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-800">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Testimonials */}
            <Section>
                <h2 className="text-3xl font-bold text-center mb-12">اعتماد مشتریان</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="p-6 border-l-4 border-[#2596be] bg-gray-50">
                            <p className="text-gray-800 italic mb-4">"{testimonial.text}"</p>
                            <p className="font-bold text-right">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
};

// --- AboutPage --- //
export const AboutPage: React.FC = () => {
    return (
        <>
            <Section>
                <h1 className="text-4xl font-bold text-center mb-12">درباره مدیریت فناوری و سلامت نقره ای</h1>
                
                <div className="space-y-16">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 border-r-4 border-[#2596be] pr-4">داستان، ماموریت و چشم‌انداز ما</h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            ما با مشاهده چالش‌های روزافزون سالمندان در دنیای مدرن و پتانسیل عظیم فناوری برای حل این مشکلات، تیم "مدیریت فناوری و سلامت نقره ای" را بنیان نهادیم. داستان ما از یک ایده ساده شروع شد: چگونه می‌توانیم با استفاده از ابزارهای نوین، زندگی مستقل، شاد و سالمی را برای سالمندان به ارمغان بیاوریم؟
                            <br/><br/>
                            <strong>ماموریت ما:</strong> ارائه خدمات و محصولات فناورانه و انسان‌محور برای ارتقاء سلامت جسمی، روانی و اجتماعی سالمندان.
                            <br/>
                            <strong>چشم‌انداز ما:</strong> تبدیل شدن به برترین مرجع نوآوری در حوزه سلامت سالمندان در منطقه و ایجاد جامعه‌ای که در آن سالمندی دورانی طلایی و پر از امید باشد.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 border-r-4 border-[#2596be] pr-4">ارزش‌های ما</h2>
                        <ul className="grid md:grid-cols-2 gap-6 text-lg">
                            <li className="p-4 border border-gray-300"><strong>کرامت:</strong> احترام به استقلال و شخصیت هر فرد.</li>
                            <li className="p-4 border border-gray-300"><strong>نوآوری:</strong> جستجوی مداوم برای راه‌حل‌های بهتر و کارآمدتر.</li>
                            <li className="p-4 border border-gray-300"><strong>همدلی:</strong> درک عمیق نیازها و احساسات سالمندان و خانواده‌هایشان.</li>
                            <li className="p-4 border border-gray-300"><strong>اعتماد:</strong> ایجاد رابطه‌ای شفاف و صادقانه با مشتریان.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 border-r-4 border-[#2596be] pr-4">آشنایی با تیم</h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            تیم ما مجموعه‌ای از متخصصان با تجربه در زمینه‌های پزشکی، مهندسی نرم‌افزار، روانشناسی و مدیریت است. ما با اشتیاق و تعهد، دانش خود را برای ساختن آینده‌ای بهتر برای سالمندان به کار گرفته‌ایم. (اطلاعات دقیق اعضای تیم به زودی در این بخش قرار خواهد گرفت).
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
};

// --- ServicesProductsPage --- //
export const ServicesProductsPage: React.FC = () => {
    const services = APP_ITEMS.filter(item => item.type === ItemType.Service);
    const products = APP_ITEMS.filter(item => item.type === ItemType.Product);
    
    return (
        <>
            <Section>
                <h1 className="text-4xl font-bold text-center mb-16">خدمات و محصولات ما</h1>

                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-center mb-8">خدمات</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map(item => <Card key={item.id} item={item} />)}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-center mb-8">محصولات</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {products.map(item => <Card key={item.id} item={item} />)}
                    </div>
                </div>
            </Section>
        </>
    );
};


// --- ServiceDetailPage --- //
const ClassScheduleTable: React.FC<{ schedules: ClassSchedule[] }> = ({ schedules }) => (
    <div>
        <h3 className="text-2xl font-semibold mb-6">برنامه کلاس‌های پیش‌رو</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
                <thead>
                    <tr className="border-b-2 border-gray-400">
                        <th className="p-4 font-bold">تاریخ</th>
                        <th className="p-4 font-bold">مکان</th>
                        <th className="p-4 font-bold"></th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((item, index) => (
                        <tr key={index} className="border-b border-gray-300">
                            <td className="p-4">{item.date}</td>
                            <td className="p-4">{item.location}</td>
                            <td className="p-4 text-left">
                                <Button as="a" href={item.link} variant="primary">ثبت نام</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const SubscriptionPlans: React.FC<{ plans: PricingPlan[] }> = ({ plans }) => (
    <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">طرح‌های اشتراک</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
                <div key={plan.name} className="border border-gray-300 p-6 flex flex-col text-center">
                    <h4 className="text-xl font-bold mb-3">{plan.name}</h4>
                    <p className="text-2xl font-bold text-[#2596be] mb-6">{plan.price}</p>
                    <ul className="text-right space-y-2 mb-8 flex-grow">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-[#2596be] ml-2 mt-1">&#10003;</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Button variant="primary">انتخاب طرح</Button>
                </div>
            ))}
        </div>
    </div>
);


export const ServiceDetailPage: React.FC = () => {
    const { itemId } = useParams<{ itemId: string }>();
    const item = APP_ITEMS.find(i => i.id === itemId);

    if (!item) {
        return <Section><p className="text-center">مورد درخواستی یافت نشد.</p></Section>;
    }

    return (
        <Section>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">{item.title}</h1>
                <p className="text-lg text-gray-800 mb-12 text-center">{item.longDescription}</p>
                
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-4 border-r-4 border-[#2596be] pr-4">ویژگی‌ها و مزایا</h3>
                    <ul className="space-y-3">
                        {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-[#2596be] ml-3 text-2xl">&#9670;</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {item.detailType === DetailType.Classes && <ClassScheduleTable schedules={item.details as ClassSchedule[]} />}
                {item.detailType === DetailType.Subscriptions && <SubscriptionPlans plans={item.details as PricingPlan[]} />}
            </div>
        </Section>
    );
};

// --- ContactPage --- //
export const ContactPage: React.FC = () => {
    return (
        <Section>
            <h1 className="text-4xl font-bold text-center mb-12">تماس با ما</h1>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-4">راه‌های ارتباطی</h2>
                    <div className="flex items-center">
                        <strong className="w-28">ایمیل:</strong>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#2596be] hover:underline">{CONTACT_INFO.email}</a>
                    </div>
                     <div className="flex items-center">
                        <strong className="w-28">کانال تلگرام:</strong>
                        <a href={`https://t.me/${CONTACT_INFO.telegram}`} target="_blank" rel="noopener noreferrer" className="text-[#2596be] hover:underline">{CONTACT_INFO.telegram}</a>
                    </div>
                     <div className="flex items-center">
                        <strong className="w-28">صفحه اینستاگرام:</strong>
                        <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="text-[#2596be] hover:underline">{CONTACT_INFO.instagram}</a>
                    </div>
                    <div className="flex items-start">
                        <strong className="w-28 flex-shrink-0">آدرس:</strong>
                        <span>{CONTACT_INFO.address}</span>
                    </div>
                </div>
                <div className="border border-gray-300 flex items-center justify-center bg-gray-100 min-h-[250px]">
                    <p className="text-gray-500">محل نمایش نقشه</p>
                </div>
            </div>
        </Section>
    );
};