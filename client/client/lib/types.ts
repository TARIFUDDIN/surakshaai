export interface CallConfig {
  systemPrompt: string;
  model?: string;
  languageHint?: string;
  selectedTools?: SelectedTool[];
  initialMessages?: Message[];
  voice?: string;
  temperature?: number;
  maxDuration?: string;
  timeExceededMessage?: string;
  callKey?: string;
}

export interface Message {
  ordinal?: number;
  role: RoleEnum;
  text: string;
  invocationId?: string;
  toolName?: string;
}

export interface SelectedTool {
  toolId?: string;
  toolName?: string;
  temporaryTool?: BaseToolDefinition;
  nameOverride?: string;
  authTokens?: { [key: string]: string };
  parameterOverrides?: { [key: string]: any };
}

export interface BaseToolDefinition {
  modelToolName?: string;
  description: string;
  dynamicParameters?: DynamicParameter[];
  staticParameters?: StaticParameter[];
  automaticParameters?: AutomaticParameter[];
  requirements?: ToolRequirements;
  timeout?: string;
  http?: BaseHttpToolDetails;
  client?: {};
}

interface AutomaticParameter {
  name: string;
  location: ParameterLocation;
  knownValue: KnownParamEnum;
}

interface BaseHttpToolDetails {
  baseUrlPattern: string;
  httpMethod: string;
}

interface ToolRequirements {
  httpSecurityOptions: SecurityOptions;
  requiredParameterOverrides: string[];
}

interface SecurityOptions {
  options: SecurityRequirements[];
}

interface SecurityRequirements {
  requirements: { [key: string]: SecurityRequirement };
}

interface SecurityRequirement {
  queryApiKey?: QueryApiKeyRequirement;
  headerApiKey?: HeaderApiKeyRequirement;
  httpAuth?: HttpAuthRequirement;
}

interface QueryApiKeyRequirement {
  name: string;
}

interface HeaderApiKeyRequirement {
  name: string;
}

interface HttpAuthRequirement {
  scheme: string;
}

interface DynamicParameter {
  name: string;
  location: ParameterLocation;
  schema: object;
  required?: boolean;
}

interface StaticParameter {
  name: string;
  location: ParameterLocation;
  value: any;
}

export interface DemoConfig {
  title: string;
  overview: string;
  callConfig: CallConfig;
}

export interface JoinUrlResponse {
  callId: string;
  created: Date;
  ended: Date | null;
  model: string;
  systemPrompt: string;
  temperature: number;
  joinUrl: string;
}

export enum RoleEnum {
  USER = "USER",
  ASSISTANT = "ASSISTANT",
  TOOL_CALL = "TOOL_CALL",
  TOOL_RESULT = "TOOL_RESULT",
}

export enum ParameterLocation {
  UNSPECIFIED = "PARAMETER_LOCATION_UNSPECIFIED",
  QUERY = "PARAMETER_LOCATION_QUERY",
  PATH = "PARAMETER_LOCATION_PATH",
  HEADER = "PARAMETER_LOCATION_HEADER",
  BODY = "PARAMETER_LOCATION_BODY",
}

export enum KnownParamEnum {
  UNSPECIFIED = "KNOWN_PARAM_UNSPECIFIED",
  CALL_ID = "KNOWN_PARAM_CALL_ID",
  CONVERSATION_HISTORY = "KNOWN_PARAM_CONVERSATION_HISTORY",
}
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  doctor: Doctor;
  location: string;
  status: 'confirmed' | 'pending' | 'canceled' | 'completed';
  type: 'In-person' | 'Video' | 'Phone';
}

export interface Prescription {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  prescribedOn: string;
  refills: number;
}

