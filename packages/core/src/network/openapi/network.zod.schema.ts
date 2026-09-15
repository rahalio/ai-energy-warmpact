import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const issueSupplyTemperatureSetpoint_Body = z
  .object({
    networkZone: z.string(),
    targetSupplyTemperatureC: z.number(),
    effectiveFrom: z.string().datetime({ offset: true }),
    rationale: z.string().optional(),
  })
  .passthrough();
const ingestReturnTemperatureRecord_Body = z
  .object({
    connectionId: z.string(),
    measuredAt: z.string().datetime({ offset: true }),
    returnTemperatureC: z.number(),
    supplyTemperatureC: z.number().optional(),
    deltaTK: z.number().optional(),
    contractualMaximumC: z.number().optional(),
    exceedanceKelvin: z.number().optional(),
    annualisedCostToNetwork: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
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
const SupplyTemperatureSetpoint = z
  .object({
    id: z.string(),
    networkZone: z.string(),
    targetSupplyTemperatureC: z.number(),
    bindingConnectionId: z.string().optional(),
    safetyFloorsRespected: z.boolean().optional(),
    estimatedHeatLossReductionPercent: z.number().optional(),
    status: z.enum(['scheduled', 'active', 'refused', 'superseded']),
    refusalReason: z.string().optional(),
    effectiveFrom: z.string().datetime({ offset: true }).optional(),
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
const ListEnvelopeSupplyTemperatureSetpoint = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              networkZone: z.string(),
              targetSupplyTemperatureC: z.number(),
              bindingConnectionId: z.string().optional(),
              safetyFloorsRespected: z.boolean().optional(),
              estimatedHeatLossReductionPercent: z.number().optional(),
              status: z.enum(['scheduled', 'active', 'refused', 'superseded']),
              refusalReason: z.string().optional(),
              effectiveFrom: z.string().datetime({ offset: true }).optional(),
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
const SupplyTemperatureSetpointCreate = z
  .object({
    networkZone: z.string(),
    targetSupplyTemperatureC: z.number(),
    effectiveFrom: z.string().datetime({ offset: true }),
    rationale: z.string().optional(),
  })
  .passthrough();
const DataEnvelopeSupplyTemperatureSetpoint = z
  .object({
    data: z
      .object({
        id: z.string(),
        networkZone: z.string(),
        targetSupplyTemperatureC: z.number(),
        bindingConnectionId: z.string().optional(),
        safetyFloorsRespected: z.boolean().optional(),
        estimatedHeatLossReductionPercent: z.number().optional(),
        status: z.enum(['scheduled', 'active', 'refused', 'superseded']),
        refusalReason: z.string().optional(),
        effectiveFrom: z.string().datetime({ offset: true }).optional(),
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
const ReturnTemperatureRecord = z
  .object({
    connectionId: z.string(),
    measuredAt: z.string().datetime({ offset: true }),
    returnTemperatureC: z.number(),
    supplyTemperatureC: z.number().optional(),
    deltaTK: z.number().optional(),
    contractualMaximumC: z.number().optional(),
    exceedanceKelvin: z.number().optional(),
    annualisedCostToNetwork: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
  })
  .passthrough();
const ListEnvelopeReturnTemperatureRecord = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              connectionId: z.string(),
              measuredAt: z.string().datetime({ offset: true }),
              returnTemperatureC: z.number(),
              supplyTemperatureC: z.number().optional(),
              deltaTK: z.number().optional(),
              contractualMaximumC: z.number().optional(),
              exceedanceKelvin: z.number().optional(),
              annualisedCostToNetwork: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough()
                .optional(),
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
const DataEnvelopeReturnTemperatureRecord = z
  .object({
    data: z
      .object({
        connectionId: z.string(),
        measuredAt: z.string().datetime({ offset: true }),
        returnTemperatureC: z.number(),
        supplyTemperatureC: z.number().optional(),
        deltaTK: z.number().optional(),
        contractualMaximumC: z.number().optional(),
        exceedanceKelvin: z.number().optional(),
        annualisedCostToNetwork: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
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
const BindingConnectionConstraint = z
  .object({
    connectionId: z.string(),
    networkZone: z.string().optional(),
    constrainsSetpoint: z.boolean(),
    minimumSupplyTemperatureC: z.number().optional(),
    reason: z.string(),
  })
  .passthrough();
const ListEnvelopeBindingConnectionConstraint = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              connectionId: z.string(),
              networkZone: z.string().optional(),
              constrainsSetpoint: z.boolean(),
              minimumSupplyTemperatureC: z.number().optional(),
              reason: z.string(),
            })
            .passthrough()
        ),
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
  issueSupplyTemperatureSetpoint_Body,
  ingestReturnTemperatureRecord_Body,
  Problem,
  SupplyTemperatureSetpoint,
  ResponseMeta,
  ListEnvelopeSupplyTemperatureSetpoint,
  SupplyTemperatureSetpointCreate,
  DataEnvelopeSupplyTemperatureSetpoint,
  Money,
  ReturnTemperatureRecord,
  ListEnvelopeReturnTemperatureRecord,
  DataEnvelopeReturnTemperatureRecord,
  BindingConnectionConstraint,
  ListEnvelopeBindingConnectionConstraint,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/network/binding-connections',
    alias: 'listBindingConnectionConstraints',
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
        name: 'networkZone',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  connectionId: z.string(),
                  networkZone: z.string().optional(),
                  constrainsSetpoint: z.boolean(),
                  minimumSupplyTemperatureC: z.number().optional(),
                  reason: z.string(),
                })
                .passthrough()
            ),
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
  {
    method: 'get',
    path: '/v1/network/return-temperatures',
    alias: 'listReturnTemperatureRecords',
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
        name: 'sortBy',
        type: 'Query',
        schema: z
          .enum(['cost_to_network_desc', 'temperature_desc'])
          .optional()
          .default('cost_to_network_desc'),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  connectionId: z.string(),
                  measuredAt: z.string().datetime({ offset: true }),
                  returnTemperatureC: z.number(),
                  supplyTemperatureC: z.number().optional(),
                  deltaTK: z.number().optional(),
                  contractualMaximumC: z.number().optional(),
                  exceedanceKelvin: z.number().optional(),
                  annualisedCostToNetwork: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough()
                    .optional(),
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
    path: '/v1/network/return-temperatures',
    alias: 'ingestReturnTemperatureRecord',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ingestReturnTemperatureRecord_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            connectionId: z.string(),
            measuredAt: z.string().datetime({ offset: true }),
            returnTemperatureC: z.number(),
            supplyTemperatureC: z.number().optional(),
            deltaTK: z.number().optional(),
            contractualMaximumC: z.number().optional(),
            exceedanceKelvin: z.number().optional(),
            annualisedCostToNetwork: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
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
    path: '/v1/network/setpoints',
    alias: 'listSupplyTemperatureSetpoints',
    requestFormat: 'json',
    parameters: [
      {
        name: 'networkZone',
        type: 'Query',
        schema: z.string().optional(),
      },
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  networkZone: z.string(),
                  targetSupplyTemperatureC: z.number(),
                  bindingConnectionId: z.string().optional(),
                  safetyFloorsRespected: z.boolean().optional(),
                  estimatedHeatLossReductionPercent: z.number().optional(),
                  status: z.enum([
                    'scheduled',
                    'active',
                    'refused',
                    'superseded',
                  ]),
                  refusalReason: z.string().optional(),
                  effectiveFrom: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
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
    path: '/v1/network/setpoints',
    alias: 'issueSupplyTemperatureSetpoint',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: issueSupplyTemperatureSetpoint_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            networkZone: z.string(),
            targetSupplyTemperatureC: z.number(),
            bindingConnectionId: z.string().optional(),
            safetyFloorsRespected: z.boolean().optional(),
            estimatedHeatLossReductionPercent: z.number().optional(),
            status: z.enum(['scheduled', 'active', 'refused', 'superseded']),
            refusalReason: z.string().optional(),
            effectiveFrom: z.string().datetime({ offset: true }).optional(),
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
        status: 403,
        description: `Setpoint would breach a health and safety floor and is refused`,
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
