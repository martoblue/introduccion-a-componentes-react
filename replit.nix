{ pkgs }: {
	deps = [
   pkgs.mailutils
   pkgs.python39Packages.clvm-tools
		pkgs.nodejs-18_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}