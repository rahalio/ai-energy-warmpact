import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

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
const DemandForecast = z
  .object({
    connectionId: z.string().optional(),
    networkZone: z.string().optional(),
    horizonHours: z.number().int(),
    points: z.array(
      z
        .object({
          at: z.string().datetime({ offset: true }),
          demandKw: z.number(),
          outdoorTemperatureC: z.number(),
          occupancyFactor: z.number(),
        })
        .partial()
        .passthrough()
    ),
    meanAbsolutePercentageError: z.number().optional(),
    modelVersion: z.string().optional(),
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
const DataEnvelopeDemandForecast = z
  .object({
    data: z
      .object({
        connectionId: z.string().optional(),
        networkZone: z.string().optional(),
        horizonHours: z.number().int(),
        points: z.array(
          z
            .object({
              at: z.string().datetime({ offset: true }),
              demandKw: z.number(),
              outdoorTemperatureC: z.number(),
              occupancyFactor: z.number(),
            })
            .partial()
            .passthrough()
        ),
        meanAbsolutePercentageError: z.number().optional(),
        modelVersion: z.string().optional(),
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

export const schemas: any = {
  Problem,
  DemandForecast,
  ResponseMeta,
  DataEnvelopeDemandForecast,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/forecasts/demand',
    alias: 'getDemandForecast',
    requestFormat: 'json',
    parameters: [
      {
        name: 'connectionId',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'networkZone',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'horizonHours',
        type: 'Query',
        schema: z.number().int().optional().default(72),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            connectionId: z.string().optional(),
            networkZone: z.string().optional(),
            horizonHours: z.number().int(),
            points: z.array(
              z
                .object({
                  at: z.string().datetime({ offset: true }),
                  demandKw: z.number(),
                  outdoorTemperatureC: z.number(),
                  occupancyFactor: z.number(),
                })
                .partial()
                .passthrough()
            ),
            meanAbsolutePercentageError: z.number().optional(),
            modelVersion: z.string().optional(),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
