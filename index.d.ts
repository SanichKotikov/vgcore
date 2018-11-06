// Type definitions for VGCore (CorelDRAW)
// Definitions by: Sanich Kotikov <https://github.com/SanichKotikov>

interface External {
  Application: VGCore.Application;
  RegisterEventListener(EventName: string, Callback: string): void;
  UnregisterEventListener(EventName: string): void;
}

export const enum cdrAlignment {
  cdrNoAlignment = 0,
  cdrLeftAlignment = 1,
  cdrRightAlignment = 2,
  cdrCenterAlignment = 3,
  cdrFullJustifyAlignment = 4,
  cdrForceJustifyAlignment = 5,
  cdrMixedAlignment = 6,
}

export const enum cdrColorType {
  cdrColorPantone = 1,
  cdrColorCMYK = 2,
  cdrColorCMY = 4,
  cdrColorRGB = 5,
  cdrColorHSB = 6,
  cdrColorHLS = 7,
  cdrColorBlackAndWhite = 8,
  cdrColorGray = 9,
  cdrColorYIQ = 11,
  cdrColorLab = 12,
  cdrColorPantoneHex = 14,
  cdrColorRegistration = 20,
  cdrColorSpot = 25,
  cdrColorMixed = 99,
  cdrColorUserInk = 22,
  cdrColorMultiChannel = 26,
}

export const enum cdrFontCase {
  cdrNormalFontCase = 0,
  cdrSmallCapsFontCase = 1,
  cdrAllCapsFontCase = 2,
  cdrMixedFontCase = 3,
}

export const enum cdrFontLine {
  cdrNoFontLine = 0,
  cdrSingleThinFontLine = 1,
  cdrSingleThinWordFontLine = 2,
  cdrSingleThickFontLine = 3,
  cdrSingleThickWordFontLine = 4,
  cdrDoubleThinFontLine = 5,
  cdrDoubleThinWordFontLine = 6,
  cdrMixedFontLine = 7,
}

export const enum cdrImageType {
  cdrBlackAndWhiteImage = 0,
  cdr16ColorsImage = 1,
  cdrGrayscaleImage = 2,
  cdrPalettedImage = 3,
  cdrRGBColorImage = 4,
  cdrCMYKColorImage = 5,
  cdrDuotoneImage = 6,
  cdrLABImage = 7,
  cdrCMYKMultiChannelImage = 8,
  cdrRGBMultiChannelImage = 9,
  cdrSpotMultiChannelImage = 10,
}

export const enum cdrReferencePoint {
  cdrTopRight = 1,
  cdrTopMiddle = 2,
  cdrTopLeft = 3,
  cdrMiddleLeft = 4,
  cdrBottomLeft = 5,
  cdrBottomMiddle = 6,
  cdrBottomRight = 7,
  cdrMiddleRight = 8,
  cdrCenter = 9,
}

export const enum cdrShapeType {
  cdrNoShape = 0,
  cdrRectangleShape = 1,
  cdrEllipseShape = 2,
  cdrCurveShape = 3,
  cdrPolygonShape = 4,
  cdrBitmapShape = 5,
  cdrTextShape = 6,
  cdrGroupShape = 7,
  cdrSelectionShape = 8,
  cdrGuidelineShape = 9,
  cdrBlendGroupShape = 10,
  cdrExtrudeGroupShape = 11,
  cdrOLEObjectShape = 12,
  cdrContourGroupShape = 13,
  cdrLinearDimensionShape = 14,
  cdrBevelGroupShape = 15,
  cdrDropShadowGroupShape = 16,
  cdr3DObjectShape = 17,
  cdrArtisticMediaGroupShape = 18,
  cdrConnectorShape = 19,
  cdrMeshFillShape = 20,
  cdrCustomShape = 21,
  cdrCustomEffectGroupShape = 22,
  cdrSymbolShape = 23,
  cdrHTMLFormObjectShape = 24,
  cdrHTMLActiveObjectShape = 25,
  cdrPerfectShape = 26,
  cdrEPSShape = 27,
}

export const enum cdrTextCharSet {
  cdrCharSetMixed = -1,
  cdrCharSetANSI = 0,
  cdrCharSetDefault = 1,
  cdrCharSetSymbol = 2,
  cdrCharSetShiftJIS = 128,
  cdrCharSetHangul = 129,
  cdrCharSetChineseBig5 = 136,
  cdrCharSetOEM = 255,
  cdrCharSetJohab = 130,
  cdrCharSetHebrew = 177,
  cdrCharSetArabic = 178,
  cdrCharSetGreek = 161,
  cdrCharSetTurkish = 162,
  cdrCharSetVietnamese = 163,
  cdrCharSetThai = 222,
  cdrCharSetEastEurope = 238,
  cdrCharSetRussian = 204,
  cdrCharSetMac = 77,
  cdrCharSetBaltic = 186,
}

export const enum cdrTextLanguage {
  cdrLanguageMixed = -1,
  cdrLanguageNone = 0,
  cdrAfrikaans = 1078,
  cdrAlbanian = 1052,
  cdrArabicAlgeria = 5121,
  cdrArabicBahrain = 15361,
  cdrArabicEgypt = 3073,
  cdrArabicIraq = 2049,
  cdrArabicJordan = 11265,
  cdrArabicKuwait = 13313,
  cdrArabicLebanon = 12289,
  cdrArabicLibya = 4097,
  cdrArabicMorocco = 6145,
  cdrArabicOman = 8193,
  cdrArabicQatar = 16385,
  cdrArabic = 1025,
  cdrArabicSyria = 10241,
  cdrArabicTunisia = 7169,
  cdrArabicUAE = 14337,
  cdrArabicYemen = 9217,
  cdrArmenian = 1067,
  cdrAssamese = 1101,
  cdrAzeriCyrillic = 2092,
  cdrAzeriLatin = 1068,
  cdrBasque = 1069,
  cdrByelorussian = 1059,
  cdrBengali = 1093,
  cdrBulgarian = 1026,
  cdrBurmese = 1109,
  cdrCatalan = 1027,
  cdrChineseHongKong = 3076,
  cdrChineseMacao = 5124,
  cdrSimplifiedChinese = 2052,
  cdrChineseSingapore = 4100,
  cdrTraditionalChinese = 1028,
  cdrCroatian = 1050,
  cdrCzech = 1029,
  cdrDanish = 1030,
  cdrBelgianDutch = 2067,
  cdrDutch = 1043,
  cdrEnglishAUS = 3081,
  cdrEnglishBelize = 10249,
  cdrEnglishCanadian = 4105,
  cdrEnglishCaribbean = 9225,
  cdrEnglishIreland = 6153,
  cdrEnglishJamaica = 8201,
  cdrEnglishNewZealand = 5129,
  cdrEnglishPhilippines = 13321,
  cdrEnglishSouthAfrica = 7177,
  cdrEnglishTrinidad = 11273,
  cdrEnglishUK = 2057,
  cdrEnglishUS = 1033,
  cdrEnglishZimbabwe = 12297,
  cdrEstonian = 1061,
  cdrFaeroese = 1080,
  cdrFarsi = 1065,
  cdrFinnish = 1035,
  cdrBelgianFrench = 2060,
  cdrFrenchCameroon = 11276,
  cdrFrenchCanadian = 3084,
  cdrFrenchCotedIvoire = 12300,
  cdrFrench = 1036,
  cdrFrenchLuxembourg = 5132,
  cdrFrenchMali = 13324,
  cdrFrenchMonaco = 6156,
  cdrFrenchReunion = 8204,
  cdrFrenchSenegal = 10252,
  cdrSwissFrench = 4108,
  cdrFrenchWestIndies = 7180,
  cdrFrenchZaire = 9228,
  cdrFrisianNetherlands = 1122,
  cdrGaelicIreland = 2108,
  cdrGaelicScotland = 1084,
  cdrGalician = 1110,
  cdrGeorgian = 1079,
  cdrGermanAustria = 3079,
  cdrGerman = 1031,
  cdrGermanLiechtenstein = 5127,
  cdrGermanLuxembourg = 4103,
  cdrSwissGerman = 2055,
  cdrGreek = 1032,
  cdrGujarati = 1095,
  cdrHebrew = 1037,
  cdrHindi = 1081,
  cdrHungarian = 1038,
  cdrIcelandic = 1039,
  cdrIndonesian = 1057,
  cdrItalian = 1040,
  cdrSwissItalian = 2064,
  cdrJapanese = 1041,
  cdrKannada = 1099,
  cdrKashmiri = 1120,
  cdrKazakh = 1087,
  cdrKhmer = 1107,
  cdrKirghiz = 1088,
  cdrKonkani = 1111,
  cdrKorean = 1042,
  cdrLao = 1108,
  cdrLatvian = 1062,
  cdrLithuanian = 1063,
  cdrMacedonian = 1071,
  cdrMalaysian = 1086,
  cdrMalayBruneiDarussalam = 2110,
  cdrMalayalam = 1100,
  cdrMaltese = 1082,
  cdrManipuri = 1112,
  cdrMarathi = 1102,
  cdrMongolian = 1104,
  cdrNepali = 1121,
  cdrNorwegianBokmol = 1044,
  cdrNorwegianNynorsk = 2068,
  cdrOriya = 1096,
  cdrPolish = 1045,
  cdrBrazilianPortuguese = 1046,
  cdrPortuguese = 2070,
  cdrPunjabi = 1094,
  cdrRhaetoRomanic = 1047,
  cdrRomanianMoldova = 2072,
  cdrRomanian = 1048,
  cdrRussianMoldova = 2073,
  cdrRussian = 1049,
  cdrSamiLappish = 1083,
  cdrSanskrit = 1103,
  cdrSerbianCyrillic = 3098,
  cdrSerbianLatin = 2074,
  cdrSindhi = 1113,
  cdrSlovak = 1051,
  cdrSlovenian = 1060,
  cdrSorbian = 1070,
  cdrSpanishArgentina = 11274,
  cdrSpanishBolivia = 16394,
  cdrSpanishChile = 13322,
  cdrSpanishColombia = 9226,
  cdrSpanishCostaRica = 5130,
  cdrSpanishDominicanRepublic = 7178,
  cdrSpanishEcuador = 12298,
  cdrSpanishElSalvador = 17418,
  cdrSpanishGuatemala = 4106,
  cdrSpanishHonduras = 18442,
  cdrMexicanSpanish = 2058,
  cdrSpanishNicaragua = 19466,
  cdrSpanishPanama = 6154,
  cdrSpanishParaguay = 15370,
  cdrSpanishPeru = 10250,
  cdrSpanishPuertoRico = 20490,
  cdrSpanishModernSort = 3082,
  cdrSpanish = 1034,
  cdrSpanishUruguay = 14346,
  cdrSpanishVenezuela = 8202,
  cdrSesotho = 1072,
  cdrSutu = 1072,
  cdrSwahili = 1089,
  cdrSwedishFinland = 2077,
  cdrSwedish = 1053,
  cdrTajik = 1064,
  cdrTamil = 1097,
  cdrTatar = 1092,
  cdrTelugu = 1098,
  cdrThai = 1054,
  cdrTibetan = 1105,
  cdrTsonga = 1073,
  cdrTswana = 1074,
  cdrTurkish = 1055,
  cdrTurkmen = 1090,
  cdrUkrainian = 1058,
  cdrUrdu = 1056,
  cdrUzbekCyrillic = 2115,
  cdrUzbekLatin = 1091,
  cdrVenda = 1075,
  cdrVietnamese = 1066,
  cdrWelsh = 1106,
  cdrXhosa = 1076,
  cdrZulu = 1077,
}

export const enum cdrTextType {
  cdrArtisticText = 0,
  cdrParagraphText = 1,
  cdrArtisticFittedText = 2,
  cdrParagraphFittedText = 3,
}

export const enum cdrTreeNodeType {
  cdrShapeNode = 1,
  cdrGroupNode = 2,
  cdrLinkGroupNode = 3,
  cdrSymbolNode = 4,
  cdrRootNode = 17,
  cdrPageNode = 18,
  cdrLayerNode = 19,
}

export const enum cdrTriState {
  cdrFalse = 0,
  cdrTrue = -1,
  cdrUndefined = -2,
}

export const enum cdrUnit {
  cdrTenthMicron = 0,
  cdrInch = 1,
  cdrFoot = 2,
  cdrMillimeter = 3,
  cdrCentimeter = 4,
  cdrPixel = 5,
  cdrMile = 6,
  cdrMeter = 7,
  cdrKilometer = 8,
  cdrDidots = 9,
  cdrAgate = 10,
  cdrYard = 11,
  cdrPica = 12,
  cdrCicero = 13,
  cdrPoint = 14,
  cdrUnitQ = 15,
  cdrUnitH = 16,
}

export const enum fileBoxType {
  open = 0,
  saveAs = 1,
}

declare namespace VGCore {

  interface Application {
    readonly ActiveDocument: Document;
    readonly ActiveLayer: Layer;
    readonly ActivePage: Page;
    readonly ActiveSelectionRange: ShapeRange;
    readonly AddonPath: string;
    readonly Documents: Documents;
    readonly FontList: FontList;
    readonly GMSManager: GMSManager;
    EventsEnabled: boolean;
    Optimization: boolean;
    readonly UILanguage: cdrTextLanguage;
    readonly VersionBuild: number;
    readonly VersionMajor: number;
    readonly VersionMinor: number;
    CorelScriptTools(): CorelScriptTools;
    CreateDocument(): Document;
    InitializeVBA(): void;
    Refresh(): void;
  }

  interface Bitmap {
    readonly Mode: cdrImageType;
    readonly ResolutionX: number;
    readonly ResolutionY: number;
    ConvertTo(Mode: cdrImageType): void;
  }

  interface Color {
    readonly IsCMYK: boolean;
    readonly IsWhite: boolean;
    readonly Type: cdrColorType;
    CMYKAssign(Cyan: number, Magenta: number, Yellow: number, Black: number): void;
    ToString(): string;
  }

  interface CorelScriptTools {
    GetFileBox(): string;
    GetFileBox(Filter: string): string;
    GetFileBox(Filter: string, Title: string): string;
    GetFileBox(Filter: string, Title: string, Type: fileBoxType): string;
    GetFileBox(Filter: string, Title: string, Type: fileBoxType, File: string): string;
    GetFileBox(Filter: string, Title: string, Type: fileBoxType, File: string, Extension: string): string;
    GetFileBox(
      Filter: string,
      Title: string,
      Type: fileBoxType,
      File: string,
      Extension: string,
      Folder: string,
    ): string;
    GetFileBox(
      Filter: string,
      Title: string,
      Type: fileBoxType,
      File: string,
      Extension: string,
      Folder: string,
      Button: string,
    ): string;
    GetFolder(): string;
    GetFolder(InitFolder: string): string;
    GetFolder(InitFolder: string, Title: string): string;
    GetFolder(InitFolder: string, Title: string, ParentWindowHandle: number): string;
  }

  interface Curve {}

  interface Document {
    readonly ActiveLayer: Layer;
    readonly FullFileName: string;
    readonly MasterPage: Page;
    readonly Metadata: Metadata;
    readonly Pages: Pages;
    PreserveSelection: boolean;
    ReferencePoint: cdrReferencePoint;
    readonly Rulers: Rulers;
    readonly Title: string;
    readonly TreeRoot: TreeNode;
    Unit: cdrUnit;
    Activate(): void;
    AddPages(NumberOfPages: number): Page;
    AddToSelection(...ShapeArray: Shape[]): void;
    ClearSelection(): void;
    CreateFill(): Fill;
    CreateFill(FillString: string): Fill;
    CreateOutline(): Outline;
    CreateOutline(OutlineString: string): Outline;
    Duplicate(): Document;
    RestoreSettings(): void;
    RestoreSettings(Tag: string): void;
    SaveSettings(): void;
    SaveSettings(Tag: string): void;
    Undo(): void;
    Undo(Levels: number): void;
  }

  interface Documents {
    readonly Count: number;
    Item(Index: number): Document;
  }

  interface Fill {
    UniformColor: Color;
    CopyAssign(SourceFill: Fill): void;
  }

  interface FontList {
    readonly Count: number;
    Item(Index: number): string;
  }

  interface GMSManager {
    readonly GMSPath: string;
    readonly Projects: GMSProjects;
    readonly UserGMSPath: string;
    RunMacro(ModuleName: string, MacroName: string, ...Parameters: any[]): any;
  }

  interface GMSProject {

  }

  interface GMSProjects {
    readonly Count: number;
    Load(FileName: string): GMSProject;
    Load(FileName: string, CopyFile: boolean): GMSProject;
    Load(FileName: string, CopyFile: boolean, ForAllUsers: boolean): GMSProject;
  }

  interface Layer {
    readonly IsSpecialLayer: boolean;
    Activate(): void;
    CreateArtisticText(Left: number, Bottom: number, Text: string): Shape;
    CreateArtisticText(Left: number, Bottom: number, Text: string, LanguageID: cdrTextLanguage): Shape;
    CreateArtisticText(
      Left: number,
      Bottom: number,
      Text: string,
      LanguageID: cdrTextLanguage,
      CharSet: cdrTextCharSet,
    ): Shape;
    CreateArtisticText(
      Left: number,
      Bottom: number,
      Text: string,
      LanguageID: cdrTextLanguage,
      CharSet: cdrTextCharSet,
      Font: string,
    ): Shape;
    CreateArtisticText(
      Left: number,
      Bottom: number,
      Text: string,
      LanguageID: cdrTextLanguage,
      CharSet: cdrTextCharSet,
      Font: string,
      Size: number,
    ): Shape;
    CreateArtisticText(
      Left: number,
      Bottom: number,
      Text: string,
      LanguageID: cdrTextLanguage,
      CharSet: cdrTextCharSet,
      Font: string,
      Size: number,
      Bold: boolean | cdrTriState,
    ): Shape;
    CreateArtisticText(
      Left: number,
      Bottom: number,
      Text: string,
      LanguageID: cdrTextLanguage,
      CharSet: cdrTextCharSet,
      Font: string,
      Size: number,
      Bold: boolean | cdrTriState,
      Italic: boolean | cdrTriState,
    ): Shape;
    CreateArtisticText(
      Left: number,
      Bottom: number,
      Text: string,
      LanguageID: cdrTextLanguage,
      CharSet: cdrTextCharSet,
      Font: string,
      Size: number,
      Bold: boolean | cdrTriState,
      Italic: boolean | cdrTriState,
      Underline: cdrFontLine,
    ): Shape;
    CreateArtisticText(
      Left: number,
      Bottom: number,
      Text: string,
      LanguageID: cdrTextLanguage,
      CharSet: cdrTextCharSet,
      Font: string,
      Size: number,
      Bold: boolean | cdrTriState,
      Italic: boolean | cdrTriState,
      Underline: cdrFontLine,
      Alignment: cdrAlignment,
    ): Shape;
    CreateRectangle2(x: number, y: number, Width: number, Height: number): Shape;
    Delete(): void;
  }

  interface Layers {
    readonly Count: number;
    Item(IndexOrName: number | string): Layer;
  }

  interface Metadata {
    DocID: string;
  }

  interface Outline {
    CopyAssign(SourceOutline: Outline): void;
  }

  interface Page {
    readonly ActiveLayer: Layer;
    readonly Layers: Layers;
    readonly Shapes: Shapes;
    SizeHeight: number;
    SizeWidth: number;
    Activate(): void;
    CreateLayer(LayerName: string): Layer;
    FindShape(Name: string): Shape;
    FindShape(Name: string, Type: cdrShapeType): Shape;
    FindShape(Name: string, Type: cdrShapeType, StaticID: number): Shape;
    FindShape(Name: string, Type: cdrShapeType, StaticID: number, Recursive: boolean): Shape;
    //GetSize(Width: number, Height: number): void;
    Delete(): void;
  }

  interface Pages {
    readonly Count: number;
    readonly First: Page;
    readonly Last: Page;
    Item(Index: number): Page;
  }

  interface PowerClip {
    readonly Shapes: Shapes;
  }

  interface Rulers {
    HUnits: cdrUnit;
  }

  interface Shape {
    readonly Bitmap: Bitmap;
    CenterX: number;
    CenterY: number;
    readonly Curve: Curve;
    Fill: Fill;
    LeftX: number;
    Locked: boolean;
    Name: string;
    PositionX: number;
    PositionY: number;
    readonly PowerClip: PowerClip;
    readonly Outline: Outline;
    RightX: number;
    RotationAngle: number;
    readonly Shapes: Shapes;
    SizeHeight: number;
    SizeWidth: number;
    readonly StaticID: number;
    readonly Text: Text;
    readonly TreeNode: TreeNode;
    readonly Type: cdrShapeType;
    ConvertToCurves(): void;
    Delete(): void;
    Rotate(Angle: number): void;
    SetPosition(PositionX: number, PositionY: number): void;
    SetSize(Width: number): void;
    SetSize(Width: number, Height: number): void;
  }

  interface ShapeRange {
    CenterX: number;
    CenterY: number;
    readonly Count: number;
    readonly FirstShape: Shape;
    readonly LastShape: Shape;
    readonly ReverseRange: ShapeRange;
    SizeHeight: number;
    SizeWidth: number;
    Item(IndexOrName: number | string): Shape;
    MoveToLayer(Layer: Layer): void;
    SetBoundingBox(x: number, y: number, Width: number, Height: number): void;
    SetBoundingBox(x: number, y: number, Width: number, Height: number, KeepAspect: boolean): void;
    SetBoundingBox(
      x: number,
      y: number,
      Width: number,
      Height: number,
      KeepAspect: boolean,
      ReferencePoint: cdrReferencePoint
    ): void;
    SetPosition(PositionX: number, PositionY: number): void;
    SetSize(Width: number): void;
    SetSize(Width: number, Height: number): void;
    // SetSizeEx(CenterX: number, CenterY: number): void;
    // SetSizeEx(CenterX: number, CenterY: number, Width: number): void;
    // SetSizeEx(CenterX: number, CenterY: number, Width: number, Height: number): void;
    Sort(CompareExpression: string): void;
    Sort(CompareExpression: string, StartIndex: number): void;
    Sort(CompareExpression: string, StartIndex: number, EndIndex: number): void;
    Sort(CompareExpression: string, StartIndex: number, EndIndex: number, Data: any): void;
  }

  interface Shapes {
    readonly Count: number;
    Item(IndexOrName: number | string): Shape;
    All(): ShapeRange;
  }

  interface Text {
    readonly Story: TextRange;
    readonly Type: cdrTextType;
  }

  interface TextRange {
    Alignment: cdrAlignment;
    Bold: boolean;
    Case: cdrFontCase;
    CharSpacing: number;
    Font: string;
    Italic: boolean;
    LineSpacing: number;
    RangeKerning: number;
    Size: number;
    Underline: cdrFontLine;
    WordSpacing: number;
  }

  interface TreeNode {
    readonly Children: TreeNodes;
    readonly Layer: Layer;
    Name: string;
    readonly Page: Page;
    readonly Shape: Shape;
    readonly ShapeType: cdrShapeType;
    readonly Type: cdrTreeNodeType;
    readonly VirtualShape: Shape;
    GetCopy(): TreeNode;
  }

  interface TreeNodes {
    readonly Count: number;
    Item(Index: number): TreeNode;
  }

}
