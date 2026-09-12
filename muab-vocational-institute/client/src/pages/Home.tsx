import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronLeft,
  Clock3,
  GraduationCap,
  Hammer,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  Play,
  Quote,
  Send,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const heroImage = asset("classroom-workshop.png");
const workshopImage = asset("hands-on-workshop.png");
const classroomImage = asset("training-classroom.jpg");

const programs = [
  {
    title: "صيانة الأجهزة المنزلية",
    category: "كهرباء وإلكترونيات",
    duration: "3 أشهر",
    level: "مبتدئ",
    icon: Wrench,
    image: workshopImage,
    accent: "orange",
  },
  {
    title: "تمديدات كهربائية",
    category: "الكهرباء العامة",
    duration: "4 أشهر",
    level: "متوسط",
    icon: Sparkles,
    image: heroImage,
    accent: "blue",
  },
  {
    title: "التكييف والتبريد",
    category: "تقنيات التبريد",
    duration: "4 أشهر",
    level: "مبتدئ",
    icon: Hammer,
    image: classroomImage,
    accent: "sand",
  },
];

const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "عن المعهد", href: "#about" },
  { label: "البرامج", href: "#programs" },
  { label: "لماذا مؤاب؟", href: "#why" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(programs[0].title);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="معهد تدريب مهني مؤاب">
            <span className="brand-mark"><GraduationCap size={22} strokeWidth={2.4} /></span>
            <span className="brand-copy">
              <strong>مُؤاب</strong>
              <small>معهد تدريب مهني</small>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <button className="nav-mobile-cta" onClick={() => scrollTo("#register")}>سجّل الآن <ArrowLeft size={16} /></button>
          </nav>

          <div className="nav-actions">
            <a className="phone-link" href="tel:+962795551234"><Phone size={16} /> <span>079 555 1234</span></a>
            <button className="nav-cta" onClick={() => scrollTo("#register")}>سجّل الآن <ArrowLeft size={17} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> مؤسسة التدريب المهني الأردنية</div>
              <h1>مهنتك تبدأ<br /><em>من هنا.</em></h1>
              <p className="hero-lead">في معهد تدريب مهني مؤاب، نحوّل الشغف إلى مهارة، والمهارة إلى فرصة حقيقية في سوق العمل.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo("#register")}>اكتشف برامجنا <ArrowLeft size={18} /></button>
                <button className="button button-ghost" onClick={() => scrollTo("#about")}><span className="play-icon"><Play size={13} fill="currentColor" /></span> تعرّف على المعهد</button>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true"><span>س</span><span>م</span><span>ع</span><span>+</span></div>
                <div><strong>+2,500</strong><small>متدرب بدأوا من هنا</small></div>
                <div className="proof-divider" />
                <div className="rating"><strong>4.9</strong><span>★★★★★</span><small>تقييم المتدربين</small></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-photo-wrap">
                <img src={heroImage} alt="ورشة تدريبية عملية داخل معهد مهني" className="hero-photo" />
                <div className="hero-photo-overlay" />
                <div className="hero-caption"><span className="caption-line" /><span>تعلّم عملي<br /><strong>يصنع الفرق</strong></span></div>
              </div>
              <div className="floating-note note-top"><span className="note-icon"><Check size={15} /></span><span><strong>تدريب معتمد</strong><small>شهادة مهنية معترف بها</small></span></div>
              <div className="floating-note note-bottom"><span className="note-icon orange-icon"><Sparkles size={15} /></span><span><strong>تعلّم بالممارسة</strong><small>ورش مجهزة بأحدث الأدوات</small></span></div>
              <div className="hero-stamp">2026<br /><span>دفعة</span></div>
              <div className="hero-scribble" aria-hidden="true">↗</div>
            </div>
          </div>
          <div className="hero-ticker"><div className="container ticker-inner"><span>تعلّم مهارة مطلوبة</span><i>✦</i><span>ابدأ مستقبلك اليوم</span><i>✦</i><span>كن جاهزاً لسوق العمل</span><i>✦</i><span>تعلّم مهارة مطلوبة</span></div></div>
        </section>

        <section className="intro-section" id="about">
          <div className="container intro-grid">
            <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>عن المعهد</span></div>
            <div className="intro-content">
              <h2>نؤمن أن أفضل<br /><span>طريق للمستقبل</span> هو أن تصنعه بيديك.</h2>
              <p>نقدّم تعليماً مهنياً تطبيقياً يواكب احتياجات السوق، ضمن بيئة محفّزة تجمع بين المعرفة، التدريب العملي، ودعم المدربين المختصين.</p>
              <a className="text-link" href="#why">اكتشف قصتنا <ArrowUpLeft size={17} /></a>
            </div>
            <div className="intro-card">
              <div className="intro-card-image"><img src={classroomImage} alt="متدربون داخل ورشة تعليمية" /></div>
              <div className="intro-card-foot"><span>منذ 1998</span><strong>خبرة تُبنى<br />عليها النجاحات</strong><ArrowUpLeft size={22} /></div>
            </div>
          </div>
        </section>

        <section className="programs-section" id="programs">
          <div className="container">
            <div className="section-heading-row">
              <div><div className="section-kicker"><span>02</span><span className="kicker-line" /><span>برامجنا التدريبية</span></div><h2>اختر مهارتك.<br /><em>وابدأ رحلتك.</em></h2></div>
              <p>برامج مصممة لتمنحك الثقة والخبرة التي تحتاجها لتدخل سوق العمل بخطوة ثابتة.</p>
            </div>
            <div className="program-grid">
              {programs.map((program, index) => {
                const Icon = program.icon;
                const isSelected = selectedProgram === program.title;
                return (
                  <article className={`program-card ${program.accent} ${isSelected ? "selected" : ""}`} key={program.title} onClick={() => setSelectedProgram(program.title)}>
                    <div className="program-image-wrap"><img src={program.image} alt={program.title} /><span className="program-number">0{index + 1}</span><button className="card-arrow" aria-label={`اختيار ${program.title}`}><ArrowUpLeft size={19} /></button></div>
                    <div className="program-body"><div className="program-icon"><Icon size={20} /></div><span className="program-category">{program.category}</span><h3>{program.title}</h3><div className="program-meta"><span><Clock3 size={14} /> {program.duration}</span><span><GraduationCap size={14} /> {program.level}</span></div></div>
                  </article>
                );
              })}
            </div>
            <div className="programs-footer"><span>البرنامج المختار: <strong>{selectedProgram}</strong></span><button className="text-link" onClick={() => scrollTo("#register")}>سجّل اهتمامك <ArrowLeft size={17} /></button></div>
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="container why-grid">
            <div className="why-visual"><div className="why-photo-main"><img src={workshopImage} alt="متدرب يتعلم استخدام الأدوات في الورشة" /></div><div className="why-photo-small"><img src={classroomImage} alt="تدريب عملي جماعي" /></div><div className="why-badge"><strong>25+</strong><span>عاماً من<br />التميّز</span></div></div>
            <div className="why-copy"><div className="section-kicker"><span>03</span><span className="kicker-line" /><span>لماذا مؤاب؟</span></div><h2>هنا، لا تكتفي<br /><em>بالتعلّم.</em> بل تتقن.</h2><p>لأن المهارة الحقيقية تحتاج أكثر من كتاب. تحتاج مدرباً يؤمن بك، وورشة تمنحك فرصة التجربة، ومجتمعاً يشجعك على الاستمرار.</p><ul className="check-list"><li><span><Check size={15} /></span><div><strong>تدريب عملي 100%</strong><small>تعلّم باستخدام أدوات ومعدات تحاكي بيئة العمل الحقيقية.</small></div></li><li><span><Check size={15} /></span><div><strong>مدربون بخبرة ميدانية</strong><small>تعلّم من خبراء يعرفون متطلبات السوق ويشاركونك خلاصة تجربتهم.</small></div></li><li><span><Check size={15} /></span><div><strong>مسارك نحو فرصة عمل</strong><small>نساعدك على بناء الثقة والجاهزية للخطوة المهنية القادمة.</small></div></li></ul></div>
          </div>
        </section>

        <section className="quote-section"><div className="container quote-inner"><Quote size={38} className="quote-mark" /><blockquote>“في مؤاب اكتشفت أن لديّ القدرة على صناعة مستقبلي بنفسي.”</blockquote><div className="quote-author"><span className="author-avatar">ل</span><span><strong>ليان العجارمة</strong><small>خريجة برنامج التكييف والتبريد — 2024</small></span></div></div></section>

        <section className="register-section" id="register">
          <div className="container register-grid">
            <div className="register-copy"><div className="section-kicker light"><span>04</span><span className="kicker-line" /><span>خطوتك الأولى</span></div><h2>جاهز تبدأ؟<br /><em>نحن جاهزون.</em></h2><p>اترك بياناتك وسيتواصل معك فريق القبول لمساعدتك في اختيار البرنامج الأنسب لك.</p><div className="contact-mini"><div><Phone size={17} /><span>079 555 1234</span></div><div><MapPin size={17} /><span>الكرك — مؤاب</span></div></div></div>
            <form className="register-form" onSubmit={handleSubmit}>
              {submitted ? <div className="success-state"><div className="success-icon"><Check size={25} /></div><h3>وصلنا طلبك!</h3><p>شكراً لاهتمامك. سيتواصل معك فريق القبول قريباً لمساعدتك.</p><button type="button" className="button button-light" onClick={() => setSubmitted(false)}>إرسال طلب آخر <ArrowLeft size={17} /></button></div> : <><div className="form-heading"><span>سجّل اهتمامك</span><small>الحقول بعلامة * إلزامية</small></div><div className="form-row"><label>الاسم الكامل *<input required name="name" placeholder="اكتب اسمك هنا" /></label><label>رقم الهاتف *<input required name="phone" type="tel" placeholder="07X XXX XXXX" /></label></div><label>اختر البرنامج التدريبي<select name="program" defaultValue={selectedProgram}>{programs.map((program) => <option key={program.title}>{program.title}</option>)}</select></label><label>رسالتك <textarea name="message" rows={3} placeholder="هل لديك سؤال أو استفسار؟ (اختياري)" /></label><button type="submit" className="button button-primary full-width">أرسل طلب التسجيل <Send size={17} /></button><small className="privacy-note">بإرسال الطلب، أنت توافق على تواصل المعهد معك بخصوص البرامج والتسجيل.</small></>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact"><div className="container footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><GraduationCap size={22} /></span><span className="brand-copy"><strong>مُؤاب</strong><small>معهد تدريب مهني</small></span></a><p>نبني مهارات اليوم<br />لنصنع فرص الغد.</p></div><div className="footer-links"><div><strong>استكشف</strong><a href="#about">عن المعهد</a><a href="#programs">البرامج التدريبية</a><a href="#why">لماذا مؤاب؟</a></div><div><strong>تواصل معنا</strong><a href="tel:+962795551234">079 555 1234</a><a href="mailto:info@muab-vtc.jo">info@muab-vtc.jo</a><span>الكرك — مؤاب</span></div></div><div className="footer-social"><span>تابعنا</span><div><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div></div><div className="container footer-bottom"><span>© 2026 معهد تدريب مهني مؤاب. جميع الحقوق محفوظة.</span><span>جزء من مؤسسة التدريب المهني الأردنية</span></div></footer>
    </div>
  );
}

export { Home };
