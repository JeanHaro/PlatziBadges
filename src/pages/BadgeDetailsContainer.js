import React from 'react';

// Importando componentes
import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';


class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    // Traemos los datos cuando el component esté listo
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            // Obtenemos el id
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            // Si encuentra esos datos, el loading deja de buscar
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        const badge = this.state.data;

        return (
            <BadgeDetails badge={this.state.data}></BadgeDetails>
        )
    }
}

export default BadgeDetailsContainer;