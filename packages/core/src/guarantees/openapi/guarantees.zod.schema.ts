import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createConditionProduct_Body = z
  .object({
    name: z.string(),
    plainLanguageSummary: z.string().optional(),
    indoorTemperatureBandC: z
      .object({ minimum: z.number(), maximum: z.number() })
      .partial()
      .passthrough(),
    hotWaterAvailability: z.enum(['continuous', 'scheduled']).optional(),
    responseTimeHours: z.number().int(),
    exclusions: z.array(z.string()).optional(),
  })
  .passthrough();
const offerConditionGuarantee_Body = z
  .object({
    connectionId: z.string(),
    conditionProductId: z.string(),
    flatRatePriceId: z.string(),
    termMonths: z.number().int(),
    serviceCreditRatePercent: z.number().optional(),
  })
  .passthrough();
const releaseExitPackage_Body = z
  .object({
    reason: z.enum([
      'customer_exit',
      'transfer_to_third_party',
      'method_change',
      'end_of_term',
    ]),
    transferee: z.string().optional(),
  })
  .passthrough();
const attemptSafetyFloorOverride_Body = z
  .object({
    floorName: z.string(),
    attemptedValue: z.number(),
    requestedBy: z.string().optional(),
  })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const ConditionProduct = z
  .object({
    id: z.string(),
    name: z.string(),
    plainLanguageSummary: z.string().optional(),
    indoorTemperatureBandC: z
      .object({ minimum: z.number(), maximum: z.number() })
      .partial()
      .passthrough(),
    hotWaterAvailability: z.enum(['continuous', 'scheduled']),
    responseTimeHours: z.number().int(),
    exclusions: z.array(z.string()).optional(),
    includesBuildingSideMaintenance: z.boolean().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const ListEnvelopeConditionProduct = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              name: z.string(),
              plainLanguageSummary: z.string().optional(),
              indoorTemperatureBandC: z
                .object({ minimum: z.number(), maximum: z.number() })
                .partial()
                .passthrough(),
              hotWaterAvailability: z.enum(['continuous', 'scheduled']),
              responseTimeHours: z.number().int(),
              exclusions: z.array(z.string()).optional(),
              includesBuildingSideMaintenance: z.boolean().optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const ConditionProductCreate = z
  .object({
    name: z.string(),
    plainLanguageSummary: z.string().optional(),
    indoorTemperatureBandC: z
      .object({ minimum: z.number(), maximum: z.number() })
      .partial()
      .passthrough(),
    hotWaterAvailability: z.enum(['continuous', 'scheduled']).optional(),
    responseTimeHours: z.number().int(),
    exclusions: z.array(z.string()).optional(),
  })
  .passthrough();
const DataEnvelopeConditionProduct = z
  .object({
    data: z
      .object({
        id: z.string(),
        name: z.string(),
        plainLanguageSummary: z.string().optional(),
        indoorTemperatureBandC: z
          .object({ minimum: z.number(), maximum: z.number() })
          .partial()
          .passthrough(),
        hotWaterAvailability: z.enum(['continuous', 'scheduled']),
        responseTimeHours: z.number().int(),
        exclusions: z.array(z.string()).optional(),
        includesBuildingSideMaintenance: z.boolean().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const Money = z
  .object({ amount: z.number(), currency: z.string() })
  .passthrough();
const ConditionGuarantee = z
  .object({
    id: z.string(),
    connectionId: z.string(),
    conditionProductId: z.string(),
    status: z.enum(['offered', 'active', 'in_revision', 'terminated']),
    flatMonthlyRate: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    termMonths: z.number().int().optional(),
    startsOn: z.string().optional(),
    serviceCreditRatePercent: z.number().optional(),
    exitTermsSummary: z.string().optional(),
    revisionTriggers: z.array(z.string()).optional(),
  })
  .passthrough();
const ListEnvelopeConditionGuarantee = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              connectionId: z.string(),
              conditionProductId: z.string(),
              status: z.enum([
                'offered',
                'active',
                'in_revision',
                'terminated',
              ]),
              flatMonthlyRate: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough(),
              termMonths: z.number().int().optional(),
              startsOn: z.string().optional(),
              serviceCreditRatePercent: z.number().optional(),
              exitTermsSummary: z.string().optional(),
              revisionTriggers: z.array(z.string()).optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const ConditionGuaranteeCreate = z
  .object({
    connectionId: z.string(),
    conditionProductId: z.string(),
    flatRatePriceId: z.string(),
    termMonths: z.number().int(),
    serviceCreditRatePercent: z.number().optional(),
  })
  .passthrough();
const DataEnvelopeConditionGuarantee = z
  .object({
    data: z
      .object({
        id: z.string(),
        connectionId: z.string(),
        conditionProductId: z.string(),
        status: z.enum(['offered', 'active', 'in_revision', 'terminated']),
        flatMonthlyRate: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough(),
        termMonths: z.number().int().optional(),
        startsOn: z.string().optional(),
        serviceCreditRatePercent: z.number().optional(),
        exitTermsSummary: z.string().optional(),
        revisionTriggers: z.array(z.string()).optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const ExitPackage = z
  .object({
    id: z.string(),
    guaranteeId: z.string(),
    connectionId: z.string().optional(),
    reason: z.enum([
      'customer_exit',
      'transfer_to_third_party',
      'method_change',
      'end_of_term',
    ]),
    transferee: z.string().optional(),
    includesThermalModel: z.boolean().optional(),
    includesConditionHistory: z.boolean().optional(),
    includesSubstationSettings: z.boolean().optional(),
    releasedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const DataEnvelopeExitPackage = z
  .object({
    data: z
      .object({
        id: z.string(),
        guaranteeId: z.string(),
        connectionId: z.string().optional(),
        reason: z.enum([
          'customer_exit',
          'transfer_to_third_party',
          'method_change',
          'end_of_term',
        ]),
        transferee: z.string().optional(),
        includesThermalModel: z.boolean().optional(),
        includesConditionHistory: z.boolean().optional(),
        includesSubstationSettings: z.boolean().optional(),
        releasedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const SafetyFloor = z
  .object({
    name: z.enum([
      'minimum_indoor_temperature',
      'minimum_domestic_hot_water_temperature',
      'minimum_circulation_temperature',
    ]),
    floorValue: z.number(),
    unit: z.string(),
    basis: z
      .enum(['tenancy_obligation', 'legionella_control', 'building_code'])
      .optional(),
    overridable: z.boolean(),
  })
  .passthrough();
const ListEnvelopeSafetyFloor = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              name: z.enum([
                'minimum_indoor_temperature',
                'minimum_domestic_hot_water_temperature',
                'minimum_circulation_temperature',
              ]),
              floorValue: z.number(),
              unit: z.string(),
              basis: z
                .enum([
                  'tenancy_obligation',
                  'legionella_control',
                  'building_code',
                ])
                .optional(),
              overridable: z.boolean(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const SafetyFloorOverrideAttempt = z
  .object({
    id: z.string(),
    floorName: z.string(),
    attemptedValue: z.number(),
    requestedBy: z.string().optional(),
    refused: z.boolean(),
    refusalReason: z.string().optional(),
    loggedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const DataEnvelopeSafetyFloorOverrideAttempt = z
  .object({
    data: z
      .object({
        id: z.string(),
        floorName: z.string(),
        attemptedValue: z.number(),
        requestedBy: z.string().optional(),
        refused: z.boolean(),
        refusalReason: z.string().optional(),
        loggedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  createConditionProduct_Body,
  offerConditionGuarantee_Body,
  releaseExitPackage_Body,
  attemptSafetyFloorOverride_Body,
  Problem,
  ConditionProduct,
  ResponseMeta,
  ListEnvelopeConditionProduct,
  ConditionProductCreate,
  DataEnvelopeConditionProduct,
  Money,
  ConditionGuarantee,
  ListEnvelopeConditionGuarantee,
  ConditionGuaranteeCreate,
  DataEnvelopeConditionGuarantee,
  ExitPackage,
  DataEnvelopeExitPackage,
  SafetyFloor,
  ListEnvelopeSafetyFloor,
  SafetyFloorOverrideAttempt,
  DataEnvelopeSafetyFloorOverrideAttempt,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/condition-products',
    alias: 'listConditionProducts',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  name: z.string(),
                  plainLanguageSummary: z.string().optional(),
                  indoorTemperatureBandC: z
                    .object({ minimum: z.number(), maximum: z.number() })
                    .partial()
                    .passthrough(),
                  hotWaterAvailability: z.enum(['continuous', 'scheduled']),
                  responseTimeHours: z.number().int(),
                  exclusions: z.array(z.string()).optional(),
                  includesBuildingSideMaintenance: z.boolean().optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/condition-products',
    alias: 'createConditionProduct',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createConditionProduct_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            name: z.string(),
            plainLanguageSummary: z.string().optional(),
            indoorTemperatureBandC: z
              .object({ minimum: z.number(), maximum: z.number() })
              .partial()
              .passthrough(),
            hotWaterAvailability: z.enum(['continuous', 'scheduled']),
            responseTimeHours: z.number().int(),
            exclusions: z.array(z.string()).optional(),
            includesBuildingSideMaintenance: z.boolean().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/guarantees',
    alias: 'listConditionGuarantees',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['offered', 'active', 'in_revision', 'terminated'])
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  connectionId: z.string(),
                  conditionProductId: z.string(),
                  status: z.enum([
                    'offered',
                    'active',
                    'in_revision',
                    'terminated',
                  ]),
                  flatMonthlyRate: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough(),
                  termMonths: z.number().int().optional(),
                  startsOn: z.string().optional(),
                  serviceCreditRatePercent: z.number().optional(),
                  exitTermsSummary: z.string().optional(),
                  revisionTriggers: z.array(z.string()).optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/guarantees',
    alias: 'offerConditionGuarantee',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: offerConditionGuarantee_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            connectionId: z.string(),
            conditionProductId: z.string(),
            status: z.enum(['offered', 'active', 'in_revision', 'terminated']),
            flatMonthlyRate: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough(),
            termMonths: z.number().int().optional(),
            startsOn: z.string().optional(),
            serviceCreditRatePercent: z.number().optional(),
            exitTermsSummary: z.string().optional(),
            revisionTriggers: z.array(z.string()).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 409,
        description: `Connection has no accepted underwriting assessment`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/guarantees/:guaranteeId/exit-package',
    alias: 'releaseExitPackage',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: releaseExitPackage_Body,
      },
      {
        name: 'guaranteeId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            guaranteeId: z.string(),
            connectionId: z.string().optional(),
            reason: z.enum([
              'customer_exit',
              'transfer_to_third_party',
              'method_change',
              'end_of_term',
            ]),
            transferee: z.string().optional(),
            includesThermalModel: z.boolean().optional(),
            includesConditionHistory: z.boolean().optional(),
            includesSubstationSettings: z.boolean().optional(),
            releasedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/safety-floors',
    alias: 'getSafetyFloors',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  name: z.enum([
                    'minimum_indoor_temperature',
                    'minimum_domestic_hot_water_temperature',
                    'minimum_circulation_temperature',
                  ]),
                  floorValue: z.number(),
                  unit: z.string(),
                  basis: z
                    .enum([
                      'tenancy_obligation',
                      'legionella_control',
                      'building_code',
                    ])
                    .optional(),
                  overridable: z.boolean(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/safety-floors/override-attempts',
    alias: 'attemptSafetyFloorOverride',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: attemptSafetyFloorOverride_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            floorName: z.string(),
            attemptedValue: z.number(),
            requestedBy: z.string().optional(),
            refused: z.boolean(),
            refusalReason: z.string().optional(),
            loggedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
