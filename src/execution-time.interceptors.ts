import { CallHandler, ExecutionContext, Logger, NestInterceptor } from "@nestjs/common";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { Observable, tap } from "rxjs";

export class ExecutionTime implements NestInterceptor{
    private readonly logger = new Logger(ExecutionTime.name);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const handler = context.getHandler();
        const methodName = handler.name;
        const className = context.getClass().name;

        const startTime = Date.now();
        return next.handle().pipe(
            tap(() => {
                this.logger.log(
                    `After... ${className}.${methodName} took ${Date.now() - startTime}ms`,
                );
            }),
        );
    }
}