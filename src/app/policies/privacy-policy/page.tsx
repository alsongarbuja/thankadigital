import Header from "@/app/(main_site)/_components/layout/Header";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import {
  privacyPolicyContents,
  privacyPolicyTableOfContents,
} from "@/utils/privacy";
import moment from "moment";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main>
        <CustomWidthWrapper>
          <div className="flex flex-col items-start my-12 md:items-center">
            <h1>Privacy Policy</h1>
            <p>Last updated: {moment("2024-08-23").format("DD MMM YYYY")}</p>
          </div>
          <div className="flex flex-col-reverse gap-8 pb-20 md:flex-row">
            <div className="w-full md:colw-[75%]">
              <h5>
                This privacy policy will help you better understand how we might
                collect, use and share your data including but not limited to
                browser data and personal information.
              </h5>

              {privacyPolicyContents.map((content, num) => (
                <div
                  key={content.id}
                  id={content.id}
                  className="flex flex-col gap-2 my-8 scroll-m-4"
                >
                  <h5>
                    {num + 1}. {content.title}
                  </h5>
                  {content.contents.map((c) => (
                    <p key={c.id}>{c.content}</p>
                  ))}
                </div>
              ))}
            </div>
            <div className="relative md:sticky md:top-5 h-fit">
              <h5>Table Of Contents</h5>
              <ul className="pl-4 mt-4 space-y-2 list-none">
                {privacyPolicyTableOfContents.map((tableOfContent, idx) => (
                  <li key={tableOfContent.id}>
                    <a href={`#${tableOfContent.id}`}>
                      {idx + 1}. {tableOfContent.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CustomWidthWrapper>
      </main>
    </>
  );
}
