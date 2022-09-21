import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  page,
  children,
}) => {
  return (
    <div className="text-slate-800">
      <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
        page={page}
      />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
};
