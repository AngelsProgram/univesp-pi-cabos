"use client"

import { useQuery } from '@tanstack/react-query'

import { getData } from './getData';

import Table from './table';

export default function Home() {
    // Queries
    const query = useQuery({ queryKey: ['produtos'], queryFn: async () => { return await getData() } });

    if (query.isLoading) return <div>Carregando do banco de dados...</div>;
    if (query.isError) return <div>Erro Atualizando.</div>;
    if (!query?.data) return <div>Sem dados disponível</div>;

    console.log(query.data);
    return <Table data={query.data} />;
}
