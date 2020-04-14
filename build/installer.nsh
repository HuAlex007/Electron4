; Script generate by the HM NIS Edit Script Wizard
; HM NIS Edit Wizard helper defines custom isntall default dir
!macro preInit
	SetRegView 64
	WriteRegExpandStr  HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Test000"
	WriteRegExpandStr  HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Test123"
	SetRegView 32
	WriteRegExpandStr  HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Test456"
	WriteRegExpandStr  HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Test789"
!macroend