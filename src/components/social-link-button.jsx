// interface ISocialLinkButton {
//   href: string;
//   icon: JSX.Element;
// }

export default function SocialLinkButton({ href, icon }) // : ISocialLinkButton
{
  return (
    <a href={href} target="_blank" className="button-social">
      {icon}
    </a>
  );
}
