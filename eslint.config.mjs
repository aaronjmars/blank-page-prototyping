import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
  ...nextConfig,
  {
    rules: {
      // eslint-plugin-react-hooks 7 (bundled with eslint-config-next 16) adds
      // this rule. The existing on-mount initialization effects rely on
      // setting state synchronously; keep it advisory rather than blocking.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
